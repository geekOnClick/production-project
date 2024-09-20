import React, { useContext, useState } from 'react'
import './styles/index.scss'
import { Route, Routes } from 'react-router-dom'
import { MainPageLazy } from './pages/MainPage/component.lazy'
import { AboutPageLazy } from './pages/AboutPage/component.lazy'
import { Theme, ThemeContext } from './themes/ThemeContext'
import { useTheme } from './themes/useTheme'
import { classNames } from './helpers/classnames'

export const App = () => {
    const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
        <button onClick={toggleTheme}>Toggle Theme</button>
    <Routes>
        <Route path='/about' element={<AboutPageLazy />} />
        <Route path='/' element={<MainPageLazy />} />
    </Routes>
    </div>
  )
}
