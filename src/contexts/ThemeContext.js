import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

export default function ThemeContextProvider({ children }) {
  const [isLightTheme, setIsLightTheme] = useState(true)
  const [light, setLight] = useState({ syntax: '#555', ui: '#ddd', bg: '#eee' })
  const [dark, setDark] = useState({ syntax: '#ddd', ui: '#333', bg: '#555' })

  const toggleTheme = () => {
    setIsLightTheme(prevTheme => !prevTheme)
  }

  return (
    <ThemeContext.Provider value={{ isLightTheme, light, dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
