let nextTodoId = 0;
console.log('2. actions start')

// 添加
const addTodo = (text) => {
    // console.log('text:' + text)
    console.log('data flow 2')
    let id = nextTodoId ++ ;
    return {
        type: 'ADD_TODO',
        id: id,
        text
    }
}

// 顶部显示状态
const setVisibility = (filter) => {
    // console.log('filter:' + filter)
    return {
        type: 'SET_VISIBILITY',
        filter
    }
}

// 触发
const toggleTodo = (id) => {
    // console.log('id:' + id)
    return {
        type: 'TOGGLE_TODO',
        id
    }
}
export {addTodo, setVisibility, toggleTodo}
console.log('2. actions end')