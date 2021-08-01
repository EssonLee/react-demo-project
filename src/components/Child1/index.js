import React, { useState } from 'react';


const Child1 = (props) => {


  return (
    <>
      <div style={{ width: '60%', margin: '30px auto', padding: '30px 5px', textAlign: 'center', border: '3px solid yellowgreen' }} >
        <h3>我是子组件1</h3>
        <div>子组件使用父组件的值：{props.parentValue}</div>
        <button style={{ margin: '20px 0' }} onClick={() => { props.setParentValue('我触发父组件函数了，子组件触发的哟~' + props.parentValue); }}>子组件使用父组件的函数</button>
      </div>
    </>
  )
};

export default Child1;