import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: '', comment: '' });

  useEffect(() => {
    fetchBook();
    fetchReviews();
  }, []);

  const fetchBook = () => {
    axios.get(`http://localhost:5000/books/${id}`)
      .then(response => setBook(response.data))
      .catch(error => console.error('Error fetching book:', error));
  };

  const fetchReviews = () => {
    axios.get(`http://localhost:5000/reviews?bookId=${id}`)
      .then(response => setReviews(response.data))
      .catch(error => console.error('Error fetching reviews:', error));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview(prevReview => ({ ...prevReview, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { rating, comment } = newReview;
    if (rating < 1 || rating > 5) {
      alert('Rating must be between 1 and 5.');
      return;
    }
    if (!comment) {
      alert('Comment cannot be empty.');
      return;
    }
    axios.post('http://localhost:5000/reviews', { ...newReview, bookId: id })
      .then(response => setReviews(prevReviews => [...prevReviews, response.data]))
      .catch(error => console.error('Error submitting review:', error));
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <h2>Reviews</h2>
      {reviews.map(review => (
        <div key={review.id}>
          <p>Rating: {review.rating}</p>
          <p>{review.comment}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <label>
          Rating:
          <input type="number" name="rating" value={newReview.rating} onChange={handleInputChange} />
        </label>
        <label>
          Comment:
          <input type="text" name="comment" value={newReview.comment} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookDetails;
