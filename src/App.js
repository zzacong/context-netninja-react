import React from 'react'
import BookList from './components/BookList'
import Navbar from './components/Navbar'
import ThemeContextProvider from './contexts/ThemeContext'
import AuthContextProvider from './contexts/AuthContext'
import BookContextProvider from './contexts/BookContext'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App
