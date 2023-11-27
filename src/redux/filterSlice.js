import { createSlice } from '@reduxjs/toolkit';

export const filterContactsSlice = createSlice({
  name: 'filterContacts',
  initialState: '',
  reducers: {
    setFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { setFilter } = filterContactsSlice.actions;
