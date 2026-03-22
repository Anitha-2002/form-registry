import { configureStore } from "@reduxjs/toolkit";

import { signageApi } from "@/features/sigange/api/signageApi";

export const store = configureStore({
  reducer: {
    [signageApi.reducerPath]: signageApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(signageApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
