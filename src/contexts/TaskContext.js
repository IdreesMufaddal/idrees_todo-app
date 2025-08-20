import React, { createContext, useState } from 'react';

// Create a context to hold user and task state
export const TaskContext = createContext();

/**
 * TaskProvider wraps the application and exposes user and task state.
 * It provides functions for logging in, adding, updating, deleting and
 * searching tasks. The search term is used to filter tasks in the consumer.
 */
export const TaskProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Authenticate the user by simply storing the username
  const login = (username) => {
    setUser(username);
  };

  // Add a new task to the list
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
    };
    setTasks([...tasks, newTask]);
  };

  // Update the text of an existing task
  const updateTask = (id, text) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, text } : task));
  };

  // Remove a task from the list
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Filter tasks based on search term
  const filteredTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <TaskContext.Provider
      value={{
        user,
        login,
        tasks: filteredTasks,
        addTask,
        updateTask,
        deleteTask,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
