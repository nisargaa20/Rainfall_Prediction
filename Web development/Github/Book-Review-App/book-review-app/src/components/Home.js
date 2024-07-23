import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Manual list of books
const manualBooks = [
  { id: '1', title: '1984', author: 'George Orwell', genre: 'Dystopian' },
  { id: '2', title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classic' },
  { id: '3', title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance' }
];

const Home = () => {
  const [books, setBooks] = useState(manualBooks);
  const [loading, setLoading] = useState(false); // Set to false as no API call is needed

  return (
    <div>
      <h1>Book List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {books.length > 0 ? (
            books.map(book => (
              <li key={book.id}>
                <Link to={`/book/${book.id}`}>{book.title}</Link> by {book.author} (Genre: {book.genre})
              </li>
            ))
          ) : (
            <p>No books available.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default Home;
