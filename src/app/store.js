import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../features/userSlice";
import priceReducer from "../features/priceSlice"


export const store = configureStore({
  reducer: {
    user: userReducer,
    price: priceReducer,
  }
});
