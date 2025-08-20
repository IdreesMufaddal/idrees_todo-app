import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

/**
 * Input field for filtering tasks. It binds to searchTerm and setSearchTerm
 * from the TaskContext.
 */
const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useContext(TaskContext);

  return (
    <input
      type="text"
      placeholder="Search tasks..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full p-2 border rounded mb-4"
    />
  );
};

export default SearchBar;
