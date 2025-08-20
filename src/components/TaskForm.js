import React, { useState, useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

/**
 * Form for adding a new task. Uses local state for the input value and
 * calls addTask from context when the form is submitted.
 */
const TaskForm = () => {
  const { addTask, lists, addList } = useContext(TaskContext);
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [dueTime, setDueTime] = useState('');
  const [notes, setNotes] = useState('');
  const [priority, setPriority] = useState(0);
  const [list, setList] = useState('No List');
  const [newList, setNewList] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      // Convert priority to a number to ensure numeric type
      addTask(
        text.trim(),
        dueDate,
        dueTime,
        notes.trim(),
        Number(priority),
        list
      );
      // reset fields
      setText('');
      setDueDate('');
      setDueTime('');
      setNotes('');
      setPriority(0);
      setList('No List');
    }
  };

  const handleAddList = () => {
    if (newList.trim()) {
      addList(newList.trim());
      setList(newList.trim());
      setNewList('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2">
      {/* Task title */}
      <input
        type="text"
        placeholder="Task title"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 border rounded"
      />
      {/* Due date and time */}
      <div className="flex space-x-2">
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="flex-1 p-2 border rounded"
        />
        <input
          type="time"
          value={dueTime}
          onChange={(e) => setDueTime(e.target.value)}
          className="flex-1 p-2 border rounded"
        />
      </div>
      {/* Notes */}
      <textarea
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="w-full p-2 border rounded resize-y"
        rows={3}
      />
      {/* List selection and add new list */}
      <div className="flex flex-col space-y-2">
        <select
          value={list}
          onChange={(e) => setList(e.target.value)}
          className="p-2 border rounded w-full"
        >
          <option value="No List">No List</option>
          {lists.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="New list name"
            value={newList}
            onChange={(e) => setNewList(e.target.value)}
            className="flex-1 p-2 border rounded"
          />
          <button
            type="button"
            onClick={handleAddList}
            className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm"
          >
            Add List
          </button>
        </div>
      </div>
      {/* Priority selection */}
      <div className="flex items-center space-x-2">
        <label className="text-sm">Priority:</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="p-2 border rounded"
        >
          {[0, 1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
      {/* Submit */}
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;