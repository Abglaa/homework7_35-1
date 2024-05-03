import React, { useEffect, useState } from 'react';
import TaskList from './TaskList';
import axios from 'axios';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Error fetching tasks: ', error);
      });
  }, []);

  const handleUpdate = (taskId, newTitle) => {
    axios.patch(`http://localhost:3001/tasks/${taskId}`, { title: newTitle })
      .then(response => {
        const updatedTasks = tasks.map(task =>
          task.id === taskId ? { ...task, title: newTitle } : task
        );
        setTasks(updatedTasks);
      })
      .catch(error => {
        console.error('Error updating task: ', error);
      });
  };

  return (
    <div className="app">
      <h1>Task List</h1>
      <TaskList tasks={tasks} onUpdate={handleUpdate} />
    </div>
  );
};

export default App;
