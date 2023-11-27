import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleFetchFulfilled = (state, { payload }) => {
  state.items = payload;
  state.isLoading = false;
  state.error = null;
};

const handleAddFulfilled = (state, { payload }) => {
  state.items = [...state.items, payload];
  state.isLoading = false;
  state.error = null;
};

const handleDeleteFulfilled = (state, { payload }) => {
  state.items = state.items.filter(item => item.id !== payload);
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.pending, handlePending)
      .addCase(fetchContactsThunk.fulfilled, handleFetchFulfilled)
      .addCase(fetchContactsThunk.rejected, handleRejected)

      .addCase(addContactThunk.pending, handlePending)
      .addCase(addContactThunk.fulfilled, handleAddFulfilled)
      .addCase(addContactThunk.rejected, handlePending)

      .addCase(deleteContactThunk.pending, handlePending)
      .addCase(deleteContactThunk.fulfilled, handleDeleteFulfilled)
      .addCase(deleteContactThunk.rejected, handlePending);
  },
});

export const contactsReducer = contactsSlice.reducer;
