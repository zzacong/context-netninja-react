import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false)

  const toggleAuth = () => {
    setAuthenticated(prevAuth => !prevAuth)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
