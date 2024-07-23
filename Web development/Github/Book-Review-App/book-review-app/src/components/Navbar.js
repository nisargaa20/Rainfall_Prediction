import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
      <li><NavLink to="/my-reviews" activeClassName="active">My Reviews</NavLink></li>
      <li><NavLink to="/recommendations" activeClassName="active">Recommendations</NavLink></li>
      <li><NavLink to="/preferences" activeClassName="active">Preferences</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
