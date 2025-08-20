import React, { useContext } from 'react';
import { TaskProvider, TaskContext } from './contexts/TaskContext';
import Login from './components/Login';
import TaskPage from './components/TaskPage';

function App() {
  return (
    <TaskProvider>
      <Main />
    </TaskProvider>
  );
}

function Main() {
  const { user } = useContext(TaskContext);
  return (
    <>
      {user ? <TaskPage /> : <Login />}
    </>
  );
}

export default App;
