import React from 'react';
import './Header.css';
import Logo from './components/Logo/Logo';
import NavigationMenu from './components/NavigationMenu/NavigationMenu';
import SearchBarButton from '../SearchBarButton/SearchBarButton';
import MenuItem from './components/NavigationMenu/MenuItem/MenuItem';
import NotificationButton from '../NotificationButton/NotificationButton';

const Header = () => {
  const selectedItemId = 1;
  const navigationMenuItems = [
    {
      id: 1,
      text: 'Home',
      link: '/browse'
    },
    {
      id: 2,
      text: 'TV Programmes',
      link: '/browse'
    },
    {
      id: 3,
      text: 'Films',
      link: '/browse'
    },
    {
      id: 4,
      text: 'Recently Added',
      link: '/browse'
    },
    {
      id: 5,
      text: 'My List',
      link: '/browse'
    }
  ];
  return (
    <div className="header-head">
      <div className="header-container">
        {/* Logo Image */}
        <Logo />
        <NavigationMenu menuItems={navigationMenuItems} selectedMenuItemId={selectedItemId} />
        <div className="header-right-navigation">
          <SearchBarButton />
          <MenuItem text="CHILDREN" />
          <NotificationButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
