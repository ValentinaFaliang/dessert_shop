import { createSlice, configureStore, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getProduct } from '../../services/products';
import { ProductInfo } from '../../types/products';

export const fetchCartData = createAsyncThunk('product/fetchCartData', async (itemId: string) => {
  const response = await getProduct(itemId);
  return response;
});

interface ProductState {
  value: number;
  items: ProductInfo[];
}

const initialState: ProductState = {
  value: 1,
  items: []
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    incremented: (state) => {
      if (state.value < 10) {
        state.value += 1;
      }
    },
    decremented: (state) => {
      if (state.value > 1) {
        state.value -= 1;
      }
    },
    updateAmount: (state, action: PayloadAction<string>) => {
      const intValue = Number(action.payload);
      if (!intValue) {
        state.value = 0;
      }
      if (intValue > 0 && intValue < 11) {
        state.value = intValue;
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartData.fulfilled, (state, action) => {
      if (state.items.findIndex((product) => action.payload.idMeal === product.idMeal) === -1) {
        state.items.push(action.payload);
      }
    });
    builder.addCase(fetchCartData.rejected, (_, action) => {
      console.log(action);
    });
  }
});

export const { incremented, decremented, updateAmount } = productSlice.actions;

export const store = configureStore({
  reducer: productSlice.reducer
});

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore['getState']>;

export type AppDispatch = AppStore['dispatch'];
