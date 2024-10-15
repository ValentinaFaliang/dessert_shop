import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import { getProduct } from '../../services/products';
import { ProductInfo } from '../../types/products';

export const fetchCartData = createAsyncThunk('product/fetchCartData', async (itemId: string) => {
  const response = await getProduct(itemId);
  return response;
});

type ProductWithCount = ProductInfo & {
  count: number;
};

interface ProductState {
  items: {
    [key in string]: ProductWithCount;
  };
}

const initialState: ProductState = {
  items: {}
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    incremented: (state, { payload }) => {
      const item = state.items[payload.id];
      if (!item) {
        return;
      }
      if (item.count < 10) {
        state.items[payload.id] = { ...item, count: item.count + 1 };
      }
    },
    decremented: (state, { payload }) => {
      const item = state.items[payload.id];
      if (item.count > 1) {
        state.items[payload.id] = { ...item, count: item.count - 1 };
      }
    },
    updateAmount: (state, { payload }) => {
      const item = state.items[payload.id];
      const intValue = Number(payload);
      if (!intValue) {
        state.items[payload.id] = { ...item, count: 0 };
      }
      if (intValue > 0 && intValue < 11) {
        state.items[payload.id] = { ...item, count: intValue };
      }
    },
    addEmptyItem: (state, { payload }) => {
      console.log({ ...state.items }, payload);
      if (!state.items[payload.idMeal]) {
        state.items[payload.idMeal] = { ...payload, count: 1 };
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartData.fulfilled, (state, { payload }) => {
      const item = state.items[payload.idMeal];
      if (item) {
        state.items[payload.idMeal] = { ...item, count: item.count };
      } else {
        state.items[payload.idMeal] = { ...payload, count: 1 };
      }
    });
    builder.addCase(fetchCartData.rejected, (_, action) => {
      console.log(action);
    });
  }
});

export const { incremented, decremented, updateAmount, addEmptyItem } = productSlice.actions;

export const store = configureStore({
  reducer: productSlice.reducer
});

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore['getState']>;

export type AppDispatch = AppStore['dispatch'];
