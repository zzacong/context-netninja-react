import React from 'react'
import { useTheme, useAuth } from '../contexts/Context'

const Navbar = () => {
  const { isLightTheme, light, dark } = useTheme()
  const { isAuthenticated, toggleAuth } = useAuth()
  const theme = isLightTheme ? light : dark

  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? 'Logged in' : 'Logged out'}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
