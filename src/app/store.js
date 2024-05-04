import { configureStore } from "@reduxjs/toolkit"; // Importing configureStore function from Redux Toolkit
import todoReducer from "../features/todo/TodoSlice"; // Importing the reducer from the TodoSlice file

export const store = configureStore({
  // Creating the Redux store
  reducer: todoReducer, // Using the todoReducer as the root reducer
});