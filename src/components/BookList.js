import React from 'react'
import { useTheme, useBook } from '../contexts/Context'

const BookList = () => {
  const { isLightTheme, light, dark } = useTheme()
  const { books } = useBook()
  const theme = isLightTheme ? light : dark

  return (
    <div
      className="book-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>
        {books.map(book => (
          <li key={book.id} style={{ background: theme.ui }}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BookList
