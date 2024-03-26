import React from "react";

const TaskCard = ({ title, tasks }) => {
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
                >
                  ⁝
                </p>
              </div>
              {/* Render status change button */}
              <button className="w-1/2 whitespace-nowrap rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600">
                {task.status === "Pending" ? "Assign" : task.status}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskCard;
