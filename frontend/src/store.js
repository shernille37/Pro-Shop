import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "./slices/apiSlice";
import cartSliceReducer from "./slices/cartSlice";
import authSliceReducer from "./slices/authSlice";

export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducer,
    auth: authSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
