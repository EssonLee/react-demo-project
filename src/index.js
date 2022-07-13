import React from 'react'
  import ReactDOM from 'react-dom'
import store from './redux/store'
// import App from './App'
import Count from './components/Count'
// import LifeDemo from '../src/生命周期demo/index'

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     {/* <LifeDemo></LifeDemo> */}
//   </React.StrictMode>,
//   document.getElementById('root')
// )


// #region redux状态管理器渲染根组件
ReactDOM.render(
  <React.StrictMode>
    <Count />
  </React.StrictMode>,
  document.getElementById('root')
)
/**
 * 检测redux中状态的变化，只要变化，就调用一次subscribe函数 
 * 这里函数体的意思会重新更新组件
 */
store.subscribe(()=>{
  ReactDOM.render(
    <React.StrictMode>
      {/* <App /> */}
      <Count />
    </React.StrictMode>,
    document.getElementById('root')
  )
})
// #endregion