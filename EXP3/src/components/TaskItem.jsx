import React from 'react';

const TaskItem = ({ task, onRemove }) => {
    return (
        <div className="task-item">
          <span>{task.text}</span>
          <button onClick={() => onRemove(task.id)}>Remove</button>
        </div>
      );      
};

export default TaskItem;
