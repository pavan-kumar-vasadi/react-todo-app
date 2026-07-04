import { useState } from 'react';
import './index.css'; // Imports the separated styles

export default function App() {
  const [tasks, setTasks] = useState(['Watches', 'Shoes', 'Shirts']);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (!input.trim()) return;
    setTasks([...tasks, input.trim()]);
    setInput('');
  };

  const handleDelete = (index) => setTasks(tasks.filter((_, i) => i !== index));

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo List</h1>
      
      <div className="todo-input-container">
        <input 
          placeholder="Add your task" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          className="todo-input"
        />
        <button onClick={handleAdd} className="todo-submit-btn">Submit</button>
      </div>

      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li key={index} className="todo-list-item">
            <span className="todo-task-text">{task}</span>
            <button onClick={() => handleDelete(index)} className="todo-delete-btn">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
