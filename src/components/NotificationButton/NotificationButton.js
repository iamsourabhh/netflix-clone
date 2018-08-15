import React from 'react';
import { withBaseIcon } from 'react-icons-kit';
import { bell } from 'react-icons-kit/icomoon/bell';
import './NotificationButton.css';

const SideIconContainer = withBaseIcon({ size: 20, style: { color: '#fff', alignSelf: 'center' } });

const NotificationButton = () => {
  return (
    <div className="notification-button-icon">
      <SideIconContainer icon={bell} />
    </div>
  );
};

export default NotificationButton;
