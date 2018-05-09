import React from 'react'
import Top from './Top'
import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/AddTodo'
import './app.css'
console.log('8. App.js start')
const App = () => (
  <div className='todo-box'>
    <div className='todo-innerBox'>
      <Top />
      <VisibleTodoList />
      <AddTodo />
    </div>
  </div>
)
console.log('8. App.js end')
export default App;