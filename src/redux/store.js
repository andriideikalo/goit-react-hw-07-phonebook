import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSplice';
import { filterReducer } from './filterSplice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// const store = configureStore({
//    reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultNiddlewarel 1
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE,
//                                                   PERSIST, PURGE, REGISTER]

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
