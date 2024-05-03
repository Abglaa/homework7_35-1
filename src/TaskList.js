import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onUpdate }) => {
    return (
        <div className="task-list">
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    onUpdate={onUpdate}
                />
            ))}
        </div>
    );
};

export default TaskList;
