import { configureStore } from "@reduxjs/toolkit";
import category from "../features/categoryesSlice"
 


import user from '../features/userSlice'
import order from "../features/orderSlice"
import application from "../features/applicationSlice"

export const store = configureStore({
  reducer: {
    order,
    application,
    category,
    user
  },
  
});
