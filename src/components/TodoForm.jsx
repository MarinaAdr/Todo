   import React, { useState } from 'react';

   const TodoForm = ({ onAdd }) => {
       const [inputValue, setInputValue] = useState('');

       const handleSubmit = (e) => {
           e.preventDefault();
           if (inputValue) {
               onAdd(inputValue);
               setInputValue('');
           }
       };

       return (
           <form onSubmit={handleSubmit}>
               <input
                   type="text"
                   value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)}
                   placeholder="Ajouter une tâche"
               />
               <button type="submit">Ajouter</button>
           </form>
       );
   };

   export default TodoForm;