import { createSlice } from "@reduxjs/toolkit";

export const formDataSlice = createSlice({
  name: "formdatamanagement",
  initialState: {
    formData: [],
  },
  reducers: {
    setFormData: (state, action) => {
      state.formData.push(action.payload);
    },
  },
});

export default formDataSlice.reducer;
export const { formData, setFormData } = formDataSlice.actions;
