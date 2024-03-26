import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import InputField from "./InputField";
import { useDispatch } from "react-redux";
import { updateFormData } from "../../redux/features/formDataSlice";

const EditTaskForm = ({ formClose, task }) => {
  const dispatch = useDispatch();
  const [formDataLocal, setFormDataLocal] = useState({
    title: task.title,
    description: task.description,
    team: task.team,
    assignee: task.assignee,
    priority: task.priority,
    status: task.status,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDataLocal((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleFormReset = (e) => {
    e.preventDefault();
    setFormDataLocal({
      title: task.title,
      description: task.description,
      team: task.team,
      assignee: task.assignee,
      priority: task.priority,
      status: task.status,
      startDate: task.startDate,
    });
  };
  // Function to handle form update
  const handleFormUpdate = () => {
    dispatch(
      updateFormData({
        id: task.id,
        updatedData: formDataLocal,
      }),
    );
    formClose();
  };
  return (
    <form>
      {/* Form Header */}
      <div className="flex items-center justify-between bg-white px-5 py-1">
        <h2 className="py-2 font-semibold">EDIT TASK</h2>
        <MdClose
          className="cursor-pointer rounded-full border border-solid border-gray-500"
          onClick={formClose}
        />
      </div>
      {/* Form Body */}
      <div className="bg-[#eedbf9] p-4">
        {/* Render Input Fields */}
        <InputField
          label="Title"
          name="title"
          value={formDataLocal.title}
          disabled
        />
        <InputField
          label="Description"
          name="description"
          value={formDataLocal.description}
          disabled
        />
        <InputField
          label="Team"
          name="team"
          value={formDataLocal.team}
          disabled
        />
        <InputField
          label="Assignee"
          name="assignee"
          value={formDataLocal.assignee}
          disabled
        />
        <InputField
          label="Start Date"
          name="startDate"
          type="date"
          value={formDataLocal.startDate}
          onChange={handleInputChange}
        />
        {/* Priority and status fields */}
        <div className="flex items-center space-x-4 space-y-2">
          <label className="w-20">Priority:</label>
          <select
            name="priority"
            value={formDataLocal.priority}
            onChange={handleInputChange}
            className="w-full flex-1 border border-solid border-gray-400 p-2"
          >
            <option value="">Select Priority</option>
            <option value="Priority Low">Priority Low</option>
            <option value="Priority Medium">Priority Medium</option>
            <option value="Priority High">Priority High</option>
          </select>
          <label>Status:</label>
          <select
            name="status"
            value={formDataLocal.status}
            onChange={handleInputChange}
            className="w-full flex-1 border border-solid border-gray-400 p-2"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Deployed">Deployed</option>
            <option value="Deferred">Deferred</option>
          </select>
        </div>
        {/* Submit and Reset Buttons */}
        <div className="flex gap-2">
          <button
            className="mt-3 w-full bg-blue-400 py-2 text-white hover:bg-blue-500"
            onClick={handleFormUpdate}
          >
            UPDATE
          </button>
          <button
            className="mt-3 w-full bg-blue-400 py-2 text-white hover:bg-blue-500"
            onClick={handleFormReset}
          >
            RESET
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditTaskForm;
