import React, { useState } from "react";
import AddTaskForm from "./form/AddTaskForm";

const Filters = () => {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const handleAddTaskClick = () => {
    setShowAddTaskForm(true);
  };
  const handleFormClose = () => {
    setShowAddTaskForm(false);
  };
  return (
    <div className={`flex flex-col md:flex-row md:justify-between `}>
      {/* Filter Section */}
      <section>
        <div className=" flex  flex-col space-y-2 md:flex-row md:items-center md:gap-2">
          <h2 className="md:w-20">Filters By:</h2>
          {/* Assignee Filter */}
          <div>
            <input
              type="text"
              id="assignee"
              name="assignee"
              placeholder="Assignee Name"
              className="w-full rounded-md bg-gray-100 px-2 py-3 focus:outline-none"
            />
          </div>
          {/* Priority Filter */}
          <div>
            <select
              id="priority"
              name="priority"
              className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 text-gray-600 focus:outline-none"
            >
              <option value="">Select Priority</option>
              <option value="priorityLow">Low</option>
              <option value="priorityMedium">Medium</option>
              <option value="priorityHigh">High</option>
            </select>
          </div>
          {/* Start Date and End Date Filters */}
          <div className="flex items-center rounded-md bg-gray-100 px-4 py-2">
            <input
              type="date"
              id="startDate"
              name="startDate"
              className="w-full rounded-md bg-transparent py-1 text-gray-600 focus:outline-none"
            />
            <span className="mx-2">-</span>
            <input
              type="date"
              id="endDate"
              name="endDate"
              className="w-full rounded-md bg-transparent py-1 text-gray-600 focus:outline-none"
            />
          </div>
        </div>
        {/* Sort Section */}
        <div className="mt-2 flex items-center gap-2">
          <h2 className="md:w-20">Sort by:</h2>
          <select
            name="sortCriteria"
            className="flex-1 px-3 py-3 text-gray-600"
          >
            <option value="priorityHighToLow">Priority: High to Low</option>
            <option value="priorityLowToHigh">Priority: Low to High</option>
            <option value="startDateOlderToLatest">
              StartDate: Older to Latest
            </option>
            <option value="startDateLatestToOlder">
              StartDate: Latest to Older
            </option>
          </select>
        </div>
      </section>
      {/* Add New Task Section */}
      <section>
        <button
          className="my-2 w-full rounded-md bg-blue-500 px-10 py-2 font-semibold text-white shadow-md hover:bg-blue-600 focus:outline-none"
          onClick={handleAddTaskClick}
        >
          Add New Task
        </button>
      </section>
      {/* Render AddTaskForm if showAddTaskForm is true */}
      {showAddTaskForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-700 bg-opacity-50">
          <AddTaskForm formClose={handleFormClose} />
        </div>
      )}
    </div>
  );
};

export default Filters;
