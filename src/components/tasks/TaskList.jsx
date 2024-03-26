import React from "react";
import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const { filteredData } = useSelector((state) => state.formData);
  console.log(filteredData);

  // Filter tasks for each status
  const pendingTasks = filteredData.filter((task) => task.status === "Pending");
  const inProgressTasks = filteredData.filter(
    (task) => task.status === "In Progress",
  );
  const completedTasks = filteredData.filter(
    (task) => task.status === "Completed",
  );
  const deployedTasks = filteredData.filter(
    (task) => task.status === "Deployed",
  );
  const deferredTasks = filteredData.filter(
    (task) => task.status === "Deferred",
  );

  return (
    <div className="task-list-container mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {/* Render TaskCards for each status */}
      <TaskCard title="Pending" tasks={pendingTasks} />
      <TaskCard title="In Progress" tasks={inProgressTasks} />
      <TaskCard title="Completed" tasks={completedTasks} />
      <TaskCard title="Deployed" tasks={deployedTasks} />
      <TaskCard title="Deferred" tasks={deferredTasks} />
    </div>
  );
};

export default TaskList;
