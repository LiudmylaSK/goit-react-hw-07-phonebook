import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../services/contactsApi';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    const response = await contactsAPI.fetchContacts();
    return response;
  }
);

export const addContactThunk = createAsyncThunk('contacts/add', async item => {
  const response = await contactsAPI.addContact(item);
  return response;
});

export const deleteContactThunk = createAsyncThunk(
  'contacts/delete',
  async id => {
    await contactsAPI.deleteContact(id);
    return id;
  }
);
