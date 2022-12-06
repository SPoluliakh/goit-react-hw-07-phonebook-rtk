import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './contacts/filterSlice';
import { contactsApi } from './contacts/contactsSlise';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
