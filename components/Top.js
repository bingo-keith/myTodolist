import React from 'react'
import { connect } from 'react-redux'
import { setVisibility } from '../actions'
import FilterLink from '../containers/FilterLink'
console.log('4. Top.js start')

const Top = () => (
    <div className="todo-tab">
        <FilterLink filter="SHOW_ALL">
            全部任务
        </FilterLink>
        <FilterLink filter="SHOW_ACTIVE">
            待办任务
        </FilterLink>
        <FilterLink filter="SHOW_COMPLETED">
            已完成任务
        </FilterLink>
    </div>
);
console.log('4. Top.js end')
export default Top;