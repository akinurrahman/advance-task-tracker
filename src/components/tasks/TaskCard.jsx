import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleDeleteTask } from "../../redux/features/formDataSlice";
import EditTaskForm from "../form/EditTaskForm";

const TaskCard = ({ title, tasks }) => {
  const dispatch = useDispatch();
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  // Function to toggle options visibility for a task
  const toggleOptions = (taskId) => {
    setSelectedTaskId((prevId) => (prevId === taskId ? null : taskId));
  };

  // Function to handle opening edit form for a task
  const [showEditTaskForm, setShowEditTaskForm] = useState(false);
  const handleEditTask = (taskId) => {
    setSelectedTaskId(taskId);
    setShowEditTaskForm(true);
  };
  // Function to handle closing edit form
  const handleFormClose = () => {
    setShowEditTaskForm(false);
  };

  return (
    <div className="task-card min-h-52 w-full rounded-md bg-white">
      {/* Card Title */}
      <h2
        className={`rounded-t-md py-2 text-center text-lg font-semibold text-white ${
          title === "Pending"
            ? "bg-[#8c8a90]"
            : title === "In Progress"
              ? "bg-[#e79724]"
              : title === "Completed"
                ? "bg-[#41a71e]"
                : title === "Deployed"
                  ? "bg-[#333a75]"
                  : "bg-[#f58871]"
        }`}
      >
        {title}
      </h2>
      {/* Render tasks */}
      <div className="space-y-2 p-2">
        {tasks.map((task) => {
          const isTaskSelected = task.id === selectedTaskId;
          return (
            <div
              key={task.id}
              className="task relative rounded-md bg-[#f3f1f2] p-2"
            >
              {/* Task Details */}
              <div className="my-2 flex justify-between border-b-2 border-gray-400 pb-2">
                <p>{task.title}</p>
                <p className="rounded-sm bg-blue-500 px-2 py-1 text-xs font-semibold text-white">
                  {task.priority}
                </p>
              </div>
              <p>{task.description}</p>
              <div className="my-2 flex justify-between">
                <p>@{task.assignee}</p>
                {/* Toggle options visibility */}
                <p
                  className="cursor-pointer rounded-sm bg-blue-500 px-2 py-1 text-xs font-semibold text-white"
                  onClick={() => toggleOptions(task.id)}
                >
                  ⁝
                </p>
              </div>

              {/* Render status change button */}

              <div className="flex justify-between">
                <button className="w-1/2 whitespace-nowrap rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600">
                  {task.status === "Pending" ? "Assign" : task.status}
                </button>
                <p className="text-gray-700">{task.startDate}</p>
              </div>
              {/* Render options */}
              {isTaskSelected && (
                <div className="absolute bottom-[-6px] right-0 z-50 flex flex-col rounded-md bg-[#CBD5E1] px-4 py-1 text-gray-700 sm:right-[-73px]">
                  <button
                    className="text-start hover:text-black"
                    onClick={() => handleEditTask(task.id)}
                  >
                    Edit
                  </button>
                  <button
                    className={`text-start hover:text-black ${task.status == "Completed" && "cursor-not-allowed"}`}
                    onClick={() => dispatch(handleDeleteTask(task.id))}
                    disabled={task.status === "Completed"}
                  >
                    Delete
                  </button>
                </div>
              )}
              {showEditTaskForm && selectedTaskId === task.id && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-700 bg-opacity-50">
                  <EditTaskForm formClose={handleFormClose} task={task} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskCard;
