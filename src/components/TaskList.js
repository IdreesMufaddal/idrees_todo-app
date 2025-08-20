import React, { useContext, useState } from 'react';
import { TaskContext } from '../contexts/TaskContext';

/**
 * Renders the list of tasks and provides inline editing and deletion.
 */
const TaskList = () => {
  const { tasks, deleteTask, updateTask } = useContext(TaskContext);

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={() => deleteTask(task.id)}
          onUpdate={(text) => updateTask(task.id, text)}
        />
      ))}
    </ul>
  );
};

/**
 * Individual task item that supports editing its text and deletion. Maintains
 * local state for editing mode and the current text value.
 */
const TaskItem = ({ task, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const handleSave = () => {
    if (text.trim()) {
      onUpdate(text.trim());
      setIsEditing(false);
    }
  };

  return (
    <li className="flex items-center justify-between bg-white p-2 border rounded mb-2">
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-grow mr-2 p-1 border rounded"
        />
      ) : (
        <span className="flex-grow">{task.text}</span>
      )}
      <div className="space-x-2">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500"
          >
            Edit
          </button>
        )}
        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskList;
