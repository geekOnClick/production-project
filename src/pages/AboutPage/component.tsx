import React from 'react'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <div>
        <div>
            <Link to='/'>Главная</Link>
            <Link to='/about'>Второстепенная</Link>
        </div>
        <div>ABOUT PAGE</div>
    </div>
  )
}

export default AboutPage