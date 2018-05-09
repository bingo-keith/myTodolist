import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
console.log('7. AddTodo.js start')
let AddTodo = ({ dispatch }) => {
    let input;
    return (
        <div>
            <form onSubmit={ e => {
                console.log('data flow 1')
                e.preventDefault();
                if (!input.value.trim()) { return }
                dispatch(addTodo(input.value))
                input.value = ''
            } }>
                <input placeholder='你想做点什么' ref={r => input = r
                } className='todo-input' autoFocus={true}/>
                <button type='submit' className='todo-btn'>
                    添加任务
                </button>
            </form>
        </div>
    )
}

AddTodo = connect()(AddTodo)//把addTodo用redux的connect方法重新包装一下，使其可使用state中的数据
console.log('7. AddTodo.js end')
export default AddTodo;