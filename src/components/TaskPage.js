import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import SearchBar from "./SearchBar";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const TaskPage = () => {
  const { user } = useContext(TaskContext);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Hello, {user}! Here are your tasks:</h1>
      <SearchBar />
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default TaskPage;
