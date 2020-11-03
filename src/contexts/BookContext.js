import React, { createContext, useState } from 'react'

export const BookContext = createContext()

export default function BookContextProvider({ children }) {
  const [books, setBooks] = useState([
    { title: 'Name of the wind', id: 1 },
    { title: 'Name The way of kings', id: 2 },
    { title: 'The final empire', id: 3 },
    { title: 'The hero of ages', id: 4 },
  ])

  return (
    <BookContext.Provider value={{ books }}>{children}</BookContext.Provider>
  )
}
