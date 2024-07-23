import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/reviews')
      .then(response => setReviews(response.data))
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  return (
    <div>
      <h1>My Reviews</h1>
      {reviews.map(review => (
        <div key={review.id}>
          <p>Book ID: {review.bookId}</p>
          <p>Rating: {review.rating}</p>
          <p>Comment: {review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default MyReviews;
