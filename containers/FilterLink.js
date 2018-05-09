import React from 'react'
import { connect } from "react-redux"
import { setVisibility } from "../actions"
import Link from "../components/Link"
//第二个参数表示组件自身的props
//mapStateToProps()将state节点注入到与view相关的组件
const mapStateToProps = (state, ownProps) => {
    // console.log({state,ownProps})
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}
//mapDispatchToProps()将需要绑定的响应事件注入到组件上
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibility(ownProps.filter))
        }
    }
}
//connent()函数生成容器组件
const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink;