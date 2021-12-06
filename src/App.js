import React from 'react';
import './App.css';

function Task({ task }) {
  return (
    <div>
      {task.text}
    </div>
  );
};

function TaskForm({ addTask }) {
  const [value, setValue] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
      type='text' 
      className='input'
      value={value}
      onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [input, setInput] = React.useState('');
  const [tasks, setTasks] = React.useState([
    { text: "" }
  ]);

  const addTask = (text, i) => {
    const newTasks = [...tasks, { text, i }];
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task, i) => (
          <Task key={i} task={task} />
        ))}
        <TaskForm addTask={addTask} />
      </ul>
      <div>
        <inputForm type='text' onChange={setInput} value={input} />
        <button type='button' onClick={addTask}>Add Task</button>
      </div>
    </div>
  );
}

export default App;