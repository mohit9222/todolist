import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoList from './components/TodoList';


function App() {
  return (
    <div className='txt'>
      <img src={require('../src/images/log.png')} alt="img-sp" className='form-log' />
      <h1>To-DO-List</h1>
    <div className="todo-app">
        <TodoList />
    </div>
    </div>
  );
}

export default App;
