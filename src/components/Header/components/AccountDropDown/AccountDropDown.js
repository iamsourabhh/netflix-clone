import React from 'react';
import { withBaseIcon } from 'react-icons-kit';
import './AccountDropDown.css';
import { arrow_down } from 'react-icons-kit/ikons/arrow_down';

const SideIconContainer = withBaseIcon({
  size: 20,
  style: { color: '#fff', alignSelf: 'center', marginLeft: '10px' }
});

const AccountDropDown = ({ avatarUrl }) => {
  return (
    <div className="account-menu-item">
      <div className="account-dropdown-button">
        <a href="/yourAcount">
          <img
            src=" https://art-s.nflximg.net/39877/27f555eae289aef641bbb1da46b267e637b39877.png"
            alt="profileImage"
          />
        </a>
        <span>
          <SideIconContainer icon={arrow_down} />
        </span>
      </div>
    </div>
  );
};

export default AccountDropDown;

//
