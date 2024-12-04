import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice/index';
import modalSlice from './modalSlice/index';

const store = configureStore({
  reducer: {
    product: productSlice,
    modal: modalSlice
  }
});

export default store;

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore['getState']>;

export type AppDispatch = AppStore['dispatch'];
