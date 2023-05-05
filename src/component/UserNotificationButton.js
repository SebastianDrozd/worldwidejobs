import React,{useState} from "react";
import "../css/UserNotificationsButton.css";
const UserNotificationButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="notification-button-container">
      <button className="notification-button" onClick={handleClick}>
        <i className="fa fa-bell"></i>
        <span className="notification-badge">3</span>
      </button>
      {showDropdown && (
        <div className="notification-dropdown">
          <a href="/" className="notification-item">
            Cmk coding has viewed your application
          </a>
          <a href="/" className="notification-item">
            You applied to a new job
          </a>
          <a href="/" className="notification-item">
            Your application to Google has been rejected
          </a>
        </div>
      )}
    </div>
  );
};

export default UserNotificationButton;
