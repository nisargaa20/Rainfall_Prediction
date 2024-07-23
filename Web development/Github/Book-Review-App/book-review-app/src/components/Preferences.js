import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Preferences = () => {
  const [genre, setGenre] = useState('');

  useEffect(() => {
    const storedGenre = localStorage.getItem('preferredGenre');
    if (storedGenre) {
      setGenre(storedGenre);
    }
  }, []);

  const handleGenreChange = (e) => {
    const newGenre = e.target.value;
    setGenre(newGenre);
    localStorage.setItem('preferredGenre', newGenre);
    // Optionally, you can update the user preference on the server
    axios.patch('http://localhost:5000/users/1', { preferredGenre: newGenre });
  };

  return (
    <div>
      <h1>Preferences</h1>
      <label>
        Preferred Genre:
        <input type="text" value={genre} onChange={handleGenreChange} />
      </label>
    </div>
  );
};

export default Preferences;
