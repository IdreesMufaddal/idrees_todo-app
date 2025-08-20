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
          onUpdate={(updates) => updateTask(task.id, updates)}
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
      onUpdate({ text: text.trim() });
      setIsEditing(false);
    }
  };

  return (
    <li className="bg-white p-3 border rounded mb-2">
      <div className="flex items-start justify-between">
        {/* Task title and details */}
        <div className="flex-grow">
          {isEditing ? (
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full p-1 border rounded mb-1"
            />
          ) : (
            <h3 className="font-medium">{task.text}</h3>
          )}
          {/* Details */}
          {!isEditing && (
            <div className="text-xs text-gray-600 space-y-0.5">
              {task.dueDate && (
                <div>
                  Due: {task.dueDate}
                  {task.dueTime ? ` at ${task.dueTime}` : ''}
                </div>
              )}
              {task.list && task.list !== 'No List' && <div>List: {task.list}</div>}
              {task.priority > 0 && <div>Priority: {task.priority}</div>}
              {task.notes && <div>Notes: {task.notes}</div>}
            </div>
          )}
        </div>
        {/* Action buttons */}
        <div className="flex space-x-2 ml-2">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-2 py-1 rounded text-sm hover:bg-blue-600"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-400 text-white px-2 py-1 rounded text-sm hover:bg-yellow-500"
            >
              Edit
            </button>
          )}
          <button
            onClick={onDelete}
            className="bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default TaskList;