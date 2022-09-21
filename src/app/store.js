import { configureStore } from "@reduxjs/toolkit";

import order from "../features/taskSlice"
import application from "../features/applicationSclice"
export const store = configureStore({
  reducer: {
    order,
    application
  },
  
});
