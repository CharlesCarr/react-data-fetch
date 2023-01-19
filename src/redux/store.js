import { configureStore } from "@reduxjs/toolkit";
import { dogApi } from "./rtkQueryService";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [dogApi.reducerPath]: dogApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dogApi.middleware),
});
