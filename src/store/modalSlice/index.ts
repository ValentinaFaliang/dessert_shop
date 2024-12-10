import { createSlice } from '@reduxjs/toolkit';

interface ModalState {
  isOpenCart: boolean;
  isOpenContact: boolean;
}

const initialState: ModalState = {
  isOpenCart: false,
  isOpenContact: false
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      console.log(payload, state.isOpenContact, 'contact modalSlice');
      if (payload === 'contact') {
        state.isOpenContact = true;
      } else {
        state.isOpenCart = true;
      }
    },
    closeModal: (state, { payload }) => {
      if (payload === 'contact') {
        state.isOpenContact = false;
      } else {
        state.isOpenCart = false;
      }
    }
  }
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
