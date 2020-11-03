import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { AuthContext } from './AuthContext'
import { BookContext } from './BookContext'

export const useTheme = () => useContext(ThemeContext)

export const useAuth = () => useContext(AuthContext)

export const useBook = () => useContext(BookContext)
