import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProducts, getProduct } from '../../services/products';
import { ProductInfo } from '../../types/products';

export const fetchCartData = createAsyncThunk('product/fetchCartData', async (itemId: string) => {
  const response = await getProduct(itemId);
  return response;
});

export const fetchItemsData = createAsyncThunk('product/fetchItemsData', async () => {
  const response = await getAllProducts();
  return response;
});

// type ProductWithCount = ProductInfo & {
//   count: number;
//   price: number;
// };

type ProductItems = {
  [key in string]: ProductInfo;
};

interface ProductState {
  items: ProductItems;
  cartItems: ProductItems;
  countPriceInfo: {
    [key in string]: {
      price: number;
      count: number;
    };
  };
}

const initialState: ProductState = {
  items: {},
  cartItems: {},
  countPriceInfo: {}
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    incremented: (state, { payload }) => {
      const item = state.countPriceInfo[payload.id];
      if (!item) {
        return;
      }
      if (item.count < 10) {
        state.countPriceInfo[payload.id] = { ...item, count: item.count + 1 };
      }
    },
    decremented: (state, { payload }) => {
      const item = state.countPriceInfo[payload.id];
      if (item.count > 1) {
        state.countPriceInfo[payload.id] = { ...item, count: item.count - 1 };
      }
    },
    updateAmount: (state, { payload }) => {
      const item = state.countPriceInfo[payload.id];
      const intValue = Number(payload);
      if (!intValue) {
        state.countPriceInfo[payload.id] = { ...item, count: 0 };
      }
      if (intValue > 0 && intValue < 11) {
        state.countPriceInfo[payload.id] = { ...item, count: intValue };
      }
    },

    addEmptyItem: (state, { payload }) => {
      if (!state.countPriceInfo[payload.idMeal]) {
        state.countPriceInfo[payload.idMeal] = {
          ...payload,
          count: 1,
          price: Math.floor(Math.random() * (100 - 2) + 2)
        };
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartData.fulfilled, (state, { payload }) => {
      const item = state.cartItems[payload.idMeal];
      if (item) {
        state.cartItems[payload.idMeal] = item;
      } else {
        state.cartItems[payload.idMeal] = { ...payload };
      }
    });
    builder.addCase(fetchCartData.rejected, (_, action) => {
      console.log(action);
    });

    builder.addCase(fetchItemsData.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.items = payload.reduce((acc, item) => {
        acc[item.idMeal as keyof ProductInfo] = item;
        if (!state.countPriceInfo[item.idMeal]) {
          state.countPriceInfo[item.idMeal] = { count: 1, price: Math.floor(Math.random() * (100 - 2) + 2) };
        }
        return acc;
      }, {} as ProductItems);
    });
    builder.addCase(fetchItemsData.rejected, (_, action) => {
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