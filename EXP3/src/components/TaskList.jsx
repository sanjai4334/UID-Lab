import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a project' },
    { id: 3, text: 'Deploy to production' },
  ]);
  const [newTaskText, setNewTaskText] = useState('');

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const addTask = (e) => {
    e.preventDefault();
    if (newTaskText.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: newTaskText.trim()
      };
      setTasks([...tasks, newTask]);
      setNewTaskText('');
    }
  };

  return (
    <div className="task-list">
      <h1>Task List</h1>
      <form onSubmit={addTask} className="add-task-form">
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
      </form>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onRemove={removeTask} />
      ))}
    </div>
  );
};

export default TaskList;
