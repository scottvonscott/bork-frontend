import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'black',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
      >Home</NavLink>

      <NavLink to="/game"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
      >Game</NavLink>
      
      <NavLink to="/high_scores"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
      >High Scores</NavLink>

    </div>
  );
};

export default NavBar;