import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Recommendations = () => {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/users/1')
      .then(response => setUser(response.data))
      .catch(error => console.error('Error fetching user:', error));
  }, []);

  useEffect(() => {
    axios.get('http://localhost:5000/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  const recommendedBooks = books.filter(book => book.genre === user.preferredGenre);

  return (
    <div>
      <h1>Recommendations</h1>
      {recommendedBooks.map(book => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Recommendations;
