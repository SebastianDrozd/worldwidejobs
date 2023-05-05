import React from "react";
import "../css/UserNotifications.css";
import { useSelector } from "react-redux";
import { useGetUserNotificationsQuery } from "../redux/notifications";
const UserNotifications = () => {
  const user = useSelector((state) => state.user);
  const { data, isLoading } = useGetUserNotificationsQuery(user.id);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(data);
  return (
    <div class="notifications-container">
      <h2>Notifications</h2>
      <ul class="notifications-list">
        {data &&
          data.map((notification) => (
            <li class="notification-item">
              <div class="notification-icon">
                <i class="fas fa-briefcase"></i>
              </div>
              <div class="notification-details">
                <div class="notification-header">
                  <span class="notification-company">Application Viewed</span>
                  <span class="notification-time">3 hours ago</span>
                </div>
                <div class="notification-content">
                  <p>
                    Your job application for the position of {notification.job_title} has been recently viewed.
                  </p>
                </div>
                <a href="job-posting.html" class="view-job-posting-btn">View Job Posting</a>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UserNotifications;
