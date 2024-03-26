import React, { useEffect, useState } from "react";
import AddTaskForm from "./form/AddTaskForm";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredData } from "../redux/features/formDataSlice";

const Filters = () => {
  const dispatch = useDispatch();

  const { formData } = useSelector((state) => state.formData);
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const handleAddTaskClick = () => {
    setShowAddTaskForm(true);
  };
  const handleFormClose = () => {
    setShowAddTaskForm(false);
  };

  const [filterVal, setFilterVal] = useState({
    assignee: "",
    priority: "",
    startDate: "",
    endDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilterVal((prev) => ({ ...prev, [name]: value }));
  };

  const applyFilter = () => {
    // Convert filter dates to Date objects
    const startDate = filterVal.startDate
      ? new Date(filterVal.startDate)
      : null;
    const endDate = filterVal.endDate ? new Date(filterVal.endDate) : null;

    return formData.filter((task) => {
      // Convert task's StartDate to a Date object
      const taskStartDate = new Date(task.startDate);

      // Check if the task matches the filter criteria
      const isAssigneeMatch =
        filterVal.assignee == "" ||
        task.assignee.toLowerCase().includes(filterVal.assignee.toLowerCase());

      const isPriorityMatch =
        filterVal.priority == "" || task.priority === filterVal.priority;

      const isStartDateMatch = !startDate || taskStartDate >= startDate;

      const isEndDateMatch = !endDate || taskStartDate <= endDate;

      return (
        isAssigneeMatch && isPriorityMatch && isStartDateMatch && isEndDateMatch
      );
    });
  };

  useEffect(() => {
    // Calculate filtered data
    const filteredData = applyFilter();
    console.log(filteredData);
    // Dispatch action to set filtered data in Redux store
    dispatch(setFilteredData(filteredData));
  }, [filterVal, dispatch, formData]);

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
              onChange={handleInputChange}
            />
          </div>
          {/* Priority Filter */}
          <div>
            <select
              id="priority"
              name="priority"
              className="w-full rounded-md border border-gray-300 bg-gray-100 px-2  py-3 text-gray-600 focus:outline-none"
              onChange={handleInputChange}
            >
              <option value="">Select Priority</option>
              <option value="Priority Low">Priority Low</option>
              <option value="Priority Medium">Priority Medium</option>
              <option value="Priority High">Priority High</option>
            </select>
          </div>
          {/* Start Date and End Date Filters */}
          <div className="flex  rounded-md bg-gray-100  py-2">
            <input
              type="date"
              id="startDate"
              name="startDate"
              className="w-full rounded-md bg-transparent py-1 pl-[8px] text-[15px] text-gray-600 focus:outline-none"
              onChange={handleInputChange}
            />
            <span className="mx-1">-</span>
            <input
              type="date"
              id="endDate"
              name="endDate"
              className="w-full rounded-md bg-transparent py-1 pr-[10px] text-[15px] text-gray-600 focus:outline-none"
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* Sort Section */}
        <div className="mt-2 flex items-center gap-1">
          <h2 className="w-14 whitespace-nowrap">Sort by:</h2>
          <select
            name="sortCriteria"
            className="flex-1 px-3 py-3 text-gray-600"
          >
            <option value="priorityHighToLow">Priority: High to Low</option>
            <option value="priorityLowToHigh">Priority: Low to High</option>
            <option value="olderToLatest">Older to Latest</option>
            <option value="latestToOlder">Latest to Older</option>
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
