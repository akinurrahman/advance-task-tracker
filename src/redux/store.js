import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./features/formDataSlice";

export const store = configureStore({
  reducer: {
    formData: formReducer,
  },
});
