import React from 'react'
import { useTheme } from '../contexts/Context'

const ThemeToggle = () => {
  const { toggleTheme } = useTheme()

  return <button onClick={toggleTheme}>Toggle the theme</button>
}

export default ThemeToggle
