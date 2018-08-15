import React from 'react';
import { withBaseIcon } from 'react-icons-kit';
import { search } from 'react-icons-kit/icomoon/search';
import './SearchBarButton.css';

const SideIconContainer = withBaseIcon({ size: 20, style: { color: '#fff', alignSelf: 'center' } });

const SearchBarButton = () => {
  return (
    <div className="search-bar-button-icon">
      <SideIconContainer icon={search} />
    </div>
  );
};

export default SearchBarButton;
