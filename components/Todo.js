import React from 'react'
console.log('5. Todo.js start')
//UI 组件有以下几个特征。
// 只负责 UI 的呈现，不带有任何业务逻辑
// 没有状态（即不使用this.state这个变量）
// 所有数据都由参数（this.props）提供
// 不使用任何 Redux 的 API
// UI 组件又称为"纯组件"，不含状态，纯粹由参数决定它的值
const Todo = ({ onClick, completed, text }) => (
  <li className='todo-list_li' style={{textDecoration:completed ? "line-through" : "none"}}>
    <input type='checkbox' className='pull-left' value='on' onClick={onClick} defaultChecked={completed} />
    {text}
  </li>
)
console.log('5. Todo.js end')
export default Todo;