import React, { useState } from 'react';

const Task = ({ id, title, onUpdate }) => {
    const [newTitle, setNewTitle] = useState(title);

    const handleUpdate = () => {
        onUpdate(id, newTitle);
    };

    return (
        <div className="task">
            <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
            />
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
};

export default Task;
