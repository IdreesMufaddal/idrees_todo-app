import React, { useState, useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

/**
 * Form for adding a new task. Uses local state for the input value and
 * calls addTask from context when the form is submitted.
 */
const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Add new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
