import { configureStore } from '@reduxjs/toolkit';
import { whatsAppAPI } from 'redux/api/API';

export const store = configureStore({
  reducer: {
    [whatsAppAPI.reducerPath]: whatsAppAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(whatsAppAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
