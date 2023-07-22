import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <h2>Menu</h2>
      <ul>
        <li>
          <Link to="/snakeGame">Section A (Snake Game)</Link>
        </li>
        <li>
          <Link to="/memoryGame">Section B (Memory Game)</Link>
        </li>
        <li>
          <Link to="/matchingGame">Section C (Matching Game)</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
