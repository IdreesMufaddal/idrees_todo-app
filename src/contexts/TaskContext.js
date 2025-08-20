import React, { createContext, useState } from 'react';

// Create a context to hold user, tasks and lists state
export const TaskContext = createContext();

/**
 * TaskProvider wraps the application and exposes user, task and list state.
 * It provides functions for logging in, adding, updating, deleting and
 * searching tasks. Lists allow grouping tasks and tasks can include
 * due dates, times, notes and priorities.
 */
export const TaskProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  // Preset lists; users can add new ones
  const [lists, setLists] = useState([
    'Home',
    'Personal',
    'Work',
    'Diet',
    'List of Book',
    'Road trip list'
  ]);

  // Authenticate the user by simply storing the username
  const login = (username) => {
    setUser(username);
  };

  // Add a new list if it doesn't already exist
  const addList = (name) => {
    if (name && !lists.includes(name)) {
      setLists([...lists, name]);
    }
  };

  /**
   * Add a new task with extended fields.
   * A task can include a due date, time, free-form notes,
   * a priority (0‑5) and the list it belongs to. Default values
   * are applied when optional parameters are omitted.
   */
  const addTask = (
    text,
    dueDate = '',
    dueTime = '',
    notes = '',
    priority = 0,
    list = 'No List'
  ) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      dueDate,
      dueTime,
      notes,
      priority,
      list,
    };
    setTasks([...tasks, newTask]);
  };

  /**
   * Update an existing task. Accepts the task id and an object
   * containing the fields to update. Any unspecified fields
   * remain unchanged.
   */
  const updateTask = (id, updates) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...updates } : task))
    );
  };

  // Remove a task from the list by id
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Filter tasks based on search term
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <TaskContext.Provider
      value={{
        user,
        login,
        tasks: filteredTasks,
        lists,
        addList,
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