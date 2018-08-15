import React from 'react';
import './NavigationMenu.css';
import MenuItem from './MenuItem/MenuItem';

const NavigationMenu = ({ menuItems, selectedMenuItemId }) => {
  return (
    <ul className="navigation-menu-list">
      {menuItems.map(menuItem => {
        return (
          <MenuItem
            key={menuItem.id}
            text={menuItem.text}
            link={menuItem.link}
            isSelected={menuItem.id === selectedMenuItemId}
          />
        );
      })}
    </ul>
  );
};

export default NavigationMenu;
