import React,{Fragment, useEffect, useState} from 'react';
import { Container } from '@material-ui/core';
//Icon
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
//
import './TopBar.css'
export default function TopBar () {
    const [user , setUser] = useState(null);
    useEffect(() => {
        if (localStorage.getItem("Authorizaton") !== null){
            var key = localStorage.getItem("Authorizaton");
        }
    },[])

    return (
        <div className="topBar">
            <ul className="topBar-nav">
                <li className="nav-Item">
                    <Badge badgeContent={4} color="primary">
                        <NotificationsNoneIcon />                    
                    </Badge>
                </li>
                <li className="nav-Item">
                    <SettingsIcon />
                </li>
                <li className="nav-Item">
                    <div className="optionCustom">
                        <select>
                            <option selected>VN</option>
                            <option>EN</option>
                        </select>   
                    </div>
                </li>
            </ul>
            <ul className="topBar-nav">
                <li className="nav-Item">
                    <div className="searchBar">
                        <input type="search" placeholder="Search"></input>
                        <SearchIcon />
                    </div> 
                </li>
                <li className="nav-Item">
                    <a>
                        <div className="d-flex">
                            {user ? 
                                <div style={{backgroundImage : "url('https://lambanner.com/wp-content/uploads/2020/04/MNT-DESIGN-10-MEO-THIET-KE-LOGO-1130x570.jpg')"}}
                                        className="roundedImage mr1">
                                    <span>Hello,<span className="text-dark">Jsan Done</span></span>
                                    <ArrowDropDownIcon style={{ fontSize: 30}}/> </div>
                                        : <a className="login" href="/login">Login</a>}
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    )
}
