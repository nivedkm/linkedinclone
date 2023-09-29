import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/userSlice';

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className='header'>
        <div className="header-left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="" />
            <div className="header-search">
              <SearchIcon/>
              <input type="text" placeholder='Search' />
            </div>
        </div>
        <div className="header-right">
            <HeaderOption Icon = {HomeIcon} title='Home'/>
            <HeaderOption Icon = {SupervisorAccountIcon} title='My Network' />
            <HeaderOption Icon = {BusinessCenterIcon} title='Jobs'/>
            <HeaderOption Icon = {ChatIcon} title='Messaging'/>
            <HeaderOption Icon = {NotificationsIcon} title='Notifications'/>
            <HeaderOption avatar = {true} title='me' onClick={logoutOfApp}/>

        </div>
    </div>
  );
}

export default Header;