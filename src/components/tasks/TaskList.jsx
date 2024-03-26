import React from "react";
import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const { formData } = useSelector((state) => state.formData);
console.log(formData)
  // Filter tasks for each status
  const pendingTasks = formData.filter((task) => task.status === "Pending");
  const inProgressTasks = formData.filter(
    (task) => task.status === "In Progress",
  );
  const completedTasks = formData.filter((task) => task.status === "Completed");
  const deployedTasks = formData.filter((task) => task.status === "Deployed");
  const deferredTasks = formData.filter((task) => task.status === "Deferred");

  const handleStatusChange = () => {};
  return (
    <div className="task-list-container mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {/* Render TaskCards for each status */}
      <TaskCard
        title="Pending"
        tasks={pendingTasks}
        onStatusChange={handleStatusChange}
      />
      <TaskCard
        title="In Progress"
        tasks={inProgressTasks}
        onStatusChange={handleStatusChange}
      />
      <TaskCard
        title="Completed"
        tasks={completedTasks}
        onStatusChange={handleStatusChange}
      />
      <TaskCard
        title="Deployed"
        tasks={deployedTasks}
        onStatusChange={handleStatusChange}
      />
      <TaskCard
        title="Deferred"
        tasks={deferredTasks}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
};

export default TaskList;
