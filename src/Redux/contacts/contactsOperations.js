import * as fetch from 'Utils/Api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, rejectWithValue) => {
    try {
      const contacts = await fetch.fetchContacts();
      return contacts;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, rejectWithValue) => {
    try {
      const contact = await fetch.deleteContacts(id);
      return contact;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const postContacts = createAsyncThunk(
  'contacts/postContacts',
  async (newContact, rejectWithValue) => {
    try {
      const contact = await fetch.postContacts(newContact);
      return contact;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
