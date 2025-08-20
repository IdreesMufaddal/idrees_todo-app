import React, { useState, useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

/**
 * Simple login form that asks for a username. On submit it calls
 * the login function from the TaskContext to set the user.
 */
const Login = () => {
  const { login } = useContext(TaskContext);
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      login(username.trim());
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl mb-4 font-semibold text-center">Login</h1>
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default Login;
