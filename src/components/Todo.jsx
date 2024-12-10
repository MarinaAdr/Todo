import React, { useState } from 'react';

const Todo = ({ todo, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () => {
        onEdit(todo.id, newText);
        setIsEditing(false);
    };

    return (
        <div className="todo-item">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                    />
                    <button className="edit" onClick={handleEdit}>Valider</button>
                </>
            ) : (
                <>
                    <span>{todo.text}</span>
                    <button className="edit" onClick={() => setIsEditing(true)}>Modifier</button>
                    <button className="delete" onClick={() => onDelete(todo.id)}>Supprimer</button>
                </>
            )}
        </div>
    );
};

export default Todo;