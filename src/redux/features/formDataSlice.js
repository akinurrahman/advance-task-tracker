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

    handleDeleteTask: (state, action) => {
      state.formData = state.formData.filter(
        (task) => task.id !== action.payload,
      );
    },
  },
});

export default formDataSlice.reducer;
export const { formData, setFormData, handleDeleteTask } =
  formDataSlice.actions;
