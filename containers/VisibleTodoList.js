import React from 'react'
import Todo from '../components/Todo'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
console.log('6. VisibleTodoList start')
//负责管理数据和业务逻辑，不负责 UI 的呈现
// 带有内部状态
// 使用 Redux 的 API
const getVisibleTodos = (todos, filter) => {
    console.log('9.2 getVisibleTodos')
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed === true)//已完成
        case 'SHOW_ACTIVE':
            return todos.filter(t => t.completed === false)//未完成
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}
//合并redux的状态到react的props中
//将state映射到 UI 组件的参数（props）
//mapStateToProps会订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染。
//mapStateToProps的第一个参数总是state对象，还可以使用第二个参数，代表容器组件的props对象。
//使用ownProps作为参数后，如果容器组件的参数发生变化，也会引发 UI 组件重新渲染。
const mapStateToProps = (state, ownProps) => {
    console.log('9.1 mapStateToProps')
    // console.log(ownProps)
    // console.log(state)
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}
//将用户对 UI 组件的操作映射成 Action
//建立 UI 组件的参数到store.dispatch方法的映射。也就是说，它定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象
//如果mapDispatchToProps是一个函数，会得到dispatch和ownProps（容器组件的props对象）两个参数。
//mapDispatchToProps作为函数，应该返回一个对象，该对象的每个键值对都是一个映射，定义了 UI 组件的参数怎样发出 Action。
//如果mapDispatchToProps是一个对象，它的每个键名也是对应 UI 组件的同名参数，键值应该是一个函数，会被当作 Action creator ，返回的 Action 会由 Redux 自动发出。
const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            // console.log(id)
            dispatch(toggleTodo(id))
        }
    }
}

const TodoList = ({ todos, onTodoClick }) => {
    console.log('9.3 TodoList')
    // console.log(todos);//todos数组
    return (
        <ul className='list-group'>
            {todos.map(todo =>
                <Todo
                    key={todo.id}
                    {...todo}
                    onClick={() => onTodoClick(todo.id)}
                />
            )}
        </ul>
    )
}
//React-Redux 提供connect方法，用于从 UI 组件生成容器组件。connect的意思，就是将这两种组件连起来。
//connect方法接受两个参数：mapStateToProps和mapDispatchToProps。它们定义了 UI 组件的业务逻辑。前者负责输入逻辑，即将state映射到 UI 组件的参数（props），后者负责输出逻辑，即将用户对 UI 组件的操作映射成 Action。
//connect方法可以省略mapStateToProps参数，那样的话，UI 组件就不会订阅Store，就是说 Store 的更新不会引起 UI 组件的更新。
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
console.log('6. VisibleTodoList end')
export default VisibleTodoList;