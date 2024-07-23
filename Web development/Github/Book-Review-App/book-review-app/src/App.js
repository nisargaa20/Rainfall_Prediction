import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BookDetails from './components/BookDetails';
import Navbar from './components/Navbar';
import Preferences from './components/Preferences';
import ThemeSwitcher from './components/ThemeSwitcher';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <ThemeSwitcher />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/preferences" element={<Preferences />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
