import React from 'react';
import "./Sidebar.css";
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar-recentItem">
      <span className='sidebar-hash'>#</span>
      <p>{topic}</p>
    </div>
);
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyVsc7yoCyTGSy1JEin2Wbne4nSDET86-vQ&usqp=CAU" alt="" />
        <Avatar src={user.photoUrl} className='sidebar-avatar'>
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who viewed you</p>
          <p className='stat-number'>2,345</p>
        </div>
        <div className="sidebar-stat">
          <p>Views on post</p>
          <p className='stat-number'>3,340</p>
        </div>
      </div>

      <div className="sidebar-bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("software engineering")}
        {recentItem("design")}

      </div>
    </div>
  );
}

export default Sidebar;