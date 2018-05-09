import { combineReducers } from 'redux'
console.log('data flow：')
console.log('1. reducers start')
/* 传入旧的state和作用的action返回一个新state */
const todo = (state, action) => {
    console.log('data flow 4')
    switch(action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false    //新增默认为未完成
            }
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state
            }
            return Object.assign({}, state, {completed: !state.completed})
        default:
            return state
    }
}

const todos = (state = [], action) => {
    console.log('1.1 todos twice')
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ]
            //todo(undefined, action) 新增一条记录时第一个参数state不存在
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        default:
            return state;
    }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    console.log('1.2 visibilityFilter twice')
    switch (action.type) {
        case 'SET_VISIBILITY':
            return action.filter;
        default:
            return state;
    }
}
console.log('1. reducers end')
export default combineReducers({
    todos,
    visibilityFilter
});