import React from 'react';
import './MenuItem.css';
const MenuItem = ({ text, link, isSelected }) => (
  <li className="navigation-menu-list-item">
    <a
      className={
        isSelected
          ? 'navigation-menu-list-item-anchor-selected'
          : 'navigation-menu-list-item-anchor'
      }
      href="/browse"
    >
      <p>{text}</p>
    </a>
  </li>
);

export default MenuItem;
