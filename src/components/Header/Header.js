import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOptions/HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { auth } from '../../firebase';
import { logout} from '../../features/userSlice';
import { useDispatch } from 'react-redux';

function Header() {


    const dispatch = useDispatch();
    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    }
    return (
        <div className="header">
            <div className="header__left">
                {/* LinkedIn Icon Image source */}
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" className=""/>
                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search" type="text"/>
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notification" />
                <HeaderOption avatar={true} title="me" onClick={logoutOfApp} />
            </div>
        </div>
    )
}

export default Header