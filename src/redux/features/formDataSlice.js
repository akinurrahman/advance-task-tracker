// formDataSlice.js

import { createSlice } from "@reduxjs/toolkit";

export const formDataSlice = createSlice({
  name: "formdatamanagement",
  initialState: {
    formData: [],
    filteredData: [],
    sortOrder: "",
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
    updateFormData: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.formData.findIndex((task) => task.id === id);
      if (index !== -1) {
        state.formData[index] = { ...state.formData[index], ...updatedData };
      }
    },
    setFilteredData: (state, action) => {
      state.filteredData = action.payload;
    },
    setSortingOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
  },
});

export default formDataSlice.reducer;
export const {
  formData,
  setFormData,
  handleDeleteTask,
  updateFormData,
  setFilteredData,
  sortOrder,
  setSortingOrder,
} = formDataSlice.actions;
