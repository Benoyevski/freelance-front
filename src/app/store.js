import { configureStore } from "@reduxjs/toolkit";

import order from "../features/orderSlice"
import application from "../features/applicationSclice"
export const store = configureStore({
  reducer: {
    order,
    application
  },
  
});
