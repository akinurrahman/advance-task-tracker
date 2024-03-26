import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import InputField from "./InputField";
import { inputFields } from "./inputFields";
import { useDispatch } from "react-redux";
import { setFormData } from "../../redux/features/formDataSlice";

const AddTaskForm = ({ formClose }) => {
  const dispatch = useDispatch();

  // State to manage form data
  const [data, setData] = useState({
    title: "",
    description: "",
    team: "",
    assignee: "",
    priority: "",
    status: "Pending",
    startDate: new Date().toISOString().slice(0, 10), // Set to today's date in YYYY-MM-DD format
  });

  // Function to handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setFormData(data));

    // Resetting form data
    setData({
      title: "",
      description: "",
      team: "",
      assignee: "",
      priority: "",
      status: "Pending",
      startDate: new Date().toISOString().slice(0, 10),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="z-50">
      {/* Form Header */}
      <div className="flex items-center justify-between bg-white px-5 py-1">
        <h2 className="py-2 font-semibold">CREATE A TASK</h2>
        {/* Close button */}
        <MdClose
          className="cursor-pointer rounded-full border border-solid border-gray-500"
          onClick={formClose}
        />
      </div>
      {/* Form Body */}
      <div className="bg-[#eedbf9] p-4">
        {/* Render Input Fields */}
        {inputFields.map((input) => (
          <InputField
            key={input.id}
            {...input}
            value={data[input.name]}
            onChange={handleInputChange}
          />
        ))}
        {/* Priority Select */}
        <div className="flex items-center space-x-4 space-y-2">
          <label className="w-20">Priority:</label>
          <select
            name="priority"
            onChange={handleInputChange}
            className="w-full flex-1 border border-solid border-gray-400 p-2"
          >
            <option value="">Select Priority</option>
            <option value="priorityLow">Low</option>
            <option value="priorityMedium">Medium</option>
            <option value="priorityHigh">High</option>
          </select>
        </div>
        {/* Submit Button */}
        <button className="mt-3 w-full bg-blue-400 py-2 text-white hover:bg-blue-500">
          CREATE TASK
        </button>
      </div>
    </form>
  );
};

export default AddTaskForm;
