import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './contacts/filterSlice';

import { contactSlice } from './contacts/contactsReducer';

export const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,
    filter: filterSlice.reducer,
  },
});
