import React , { useState }from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch,setInputSearch] = useState("");
    return (
        <div className="header">
             <div className="header__left">
                  <MenuIcon />
                  <Link to="/">
                  <img
                    className="header__logo"
                  src="https://cdn.vox-cdn.com/thumbor/r3AM_q5ktTjtd8gjoFwpAakshaA=/0x0:1680x1050/1400x1050/filters:focal(706x391:974x659):format(gif)/cdn.vox-cdn.com/uploads/chorus_image/image/56414325/YTLogo_old_new_animation.0.gif" alt="" 
                 />
                  </Link>
                 </div>
              <div className="header__input">
                  <input onChange={e => setInputSearch(e.target.value)} 
                  value={inputSearch} placeholder="Search" type="text" 
                  />
                  <Link to={`/search/${inputSearch}`}>
                  <SearchIcon className="header__inputButton" />
                  </Link>

                 </div>
              <div className="header__icons">
                   <VideoCallIcon  className="header__icon"/>
                   <AppsIcon className="header__icon" />
                   <NotificationsIcon className="header__icon" />
                    <Avatar
                           alt="alien"
                             src="https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Alien_Resurrection_poster.jpg/220px-Alien_Resurrection_poster.jpg"
                    />
              </div>
            
            
            
        </div>
    )
}

export default Header
