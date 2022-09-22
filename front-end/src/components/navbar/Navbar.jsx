import { Link, useLocation } from "react-router-dom"

import { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import { faHome, faList, faPen, faCog, faKey, faLock, faPhone } from "@fortawesome/free-solid-svg-icons";
import './navbar.css'

const Navbar = () => {
    const [showSidebar, setShowSidear] = useState(false);
    const location = useLocation();
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome,
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList,
        },
        {
            name: "Submit",
            path: "/submit",
            icon: faPen,
        },
        {
            name: "Contacts",
            path: "/contacts",
            icon: faPhone,
        },
        {
            name: "Login",
            path: "/login",
            icon: faLock,
        },
        {
            name: "Sign up",
            path: "/signup",
            icon: faKey,
        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog,
        }
    ]

    function closeSidebar(){
        setShowSidear(false)
    }

  return (
    <>
    <div className='navbar container'>
        <Link to="/" className='logo'>Yum<span>my Coo</span>king</Link>
        <div className='nav-links'>
                {links.map(link => (
                    <Link className={location.pathname === link.path ? "active" : "" } to={link.path} key={link.name}>{link.name}</Link>
                ))}
        </div> 
        <div onClick={() => setShowSidear(!showSidebar)} className={showSidebar ? 'sidebar-btn active' : 'sidebar-btn'}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>
    </div>
    { showSidebar && <Sidebar close={closeSidebar} links={links}/> }
    </>
  )
}

export default Navbar