//注意：import后不加{}代表引入的default，加了{}代表引入其中导出的一部分，用到了ES6的解构
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
//数据逻辑处理保存在reducers里
import todoApp from './reducers'
import App from './components/App'
//在顶层创建store管理整个项目的数据
const store = createStore(todoApp)
console.log('9. root index start')
//connect方法生成容器组件以后，需要让容器组件拿到state对象，才能生成 UI 组件的参数。
// 一种解决方法是将state对象作为参数，传入容器组件。但是，这样做比较麻烦，尤其是容器组件可能在很深的层级，一级级将state传下去就很麻烦。
// React-Redux 提供Provider组件，可以让容器组件拿到state。
//Provider在根组件外面包了一层，这样一来，App的所有子组件就默认都可以拿到state了。
render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root')
)

console.log('9. root index end')

// 该demo相关学习文档
//http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html