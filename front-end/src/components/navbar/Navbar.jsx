import { Link, useLocation } from "react-router-dom"

import { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import { faBowlRice, faList, faPen, faCog, faKey, faLock, faPhone } from "@fortawesome/free-solid-svg-icons";
import './navbar.css'

const Navbar = () => {
    const [showSidebar, setShowSidear] = useState(false);
    const location = useLocation();
    let links = [
        {
            name: "Top Chefs",
            path: "/topchefs",
            icon: faBowlRice,
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
    let loginInformation = JSON.parse(localStorage.getItem("loginInformation")) || {};
    let token = loginInformation.token;
    console.log(links)
    if (token) {
        links.splice(4, 2);
        console.log(links)
    }
    

    function closeSidebar(){
        setShowSidear(false)
    }

    function logout() {
        localStorage.removeItem("loginInformation");
        window.location.reload();
    }

  return (
    <>
    <div className='navbar container'>
        <Link to="/" className='logo'>Yum<span>my Coo</span>king</Link>
        <div className='nav-links'>
                {links.map(link => (
                    <Link className={location.pathname === link.path ? "active" : "" } to={link.path} key={link.name}>{link.name}</Link>
                ))}
                {token && <Link to="/logout" onClick={logout} key="logout">Logout</Link>}
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