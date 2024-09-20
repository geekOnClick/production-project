import React from 'react'
//если импортируем просто css - то import и сразу применится
// import './style.scss'
import css from './style.module.scss';

const Counter = () => {
    const [count, setCount] = React.useState(0)
  return (
    <div>
        <button className={css.button} onClick={() => setCount(count + 1)}>increment</button>
        <div>{count}</div>
    </div>
  )
}

export default Counter;