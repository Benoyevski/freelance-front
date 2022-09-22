import { configureStore } from "@reduxjs/toolkit";
import category from "../features/categoryesSlice"
 



import order from "../features/taskSlice"
import application from "../features/applicationSclice"
export const store = configureStore({
  reducer: {
    order,
    application,
    category
  },
  
});
