import React from "react";
import { FaUserAlt } from "react-icons/fa";
import TaskList from "./components/tasks/TaskList";
import Filters from "./components/Filters";

const App = () => {
  return (
    <div className="mx-auto max-w-[1200px]  p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Task Board</h2>
        <FaUserAlt className="rounded-full bg-white p-1 text-xl" size={35} />
      </div>
      <div className="mt-6 rounded-xl border-2 border-solid border-white p-4">
        <Filters />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
