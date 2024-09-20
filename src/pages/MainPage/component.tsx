import React from 'react'
import { Link } from 'react-router-dom'
import Counter from 'src/component/Counter'

const MainPage = () => {
  return (
    <div>
        <div>
            <Link to='/'>Главная</Link>
            <Link to='/about'>Второстепенная</Link>
        </div>
        <div>MAIN PAGE</div>
        <Counter />
    </div>
  )
}

export default MainPage;