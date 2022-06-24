import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../logoMovie.png";

import "./Navbar.css";

{
  /* <NavLink exact to="/" >Home</NavLink>
<NavLink to="/favs" >Favoritas</NavLink> */
}

export default function NavBar() {
  const [isHovering, setIsHovering] = useState({
    home: false,
    favorites: false,
  });

  const handleMouseOver = (e) => {
    setIsHovering({
      ...isHovering,
      //[e.target.name]: true,

      home: true,
    });
  }

  // const handleMouseOut = () => {
  //   setIsHovering(false);
  // }

  return (
    <nav className="navigation">
      <ul>
        <li key={"home"} id="home" className={isHovering.home ? "list active" : "list"} onMouseOver={handleMouseOver}>
          <NavLink exact to="/">
            <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
            <span className="title">Home</span>
            </NavLink>
        </li>
        <li id="favorites" className={isHovering.favorites ? "list active" : "list"} onMouseOver={handleMouseOver}>
          <NavLink to="/favs">
            <span className="icon"><ion-icon name="star-outline"></ion-icon></span>
            <span className="title">Favorites</span>
          </NavLink>
        </li>
        <li className="list">
          <a href="#">
            <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
            <span className="title">Profile</span>
          </a>
        </li>
        <li className="list">
          <a href="#">
            <span className="icon"><ion-icon name="settings-outline"></ion-icon></span>
            <span className="title">Setting</span>
          </a>
        </li>
        <li className="list">
          <a href="#">
            <span className="icon"><ion-icon name="help-outline"></ion-icon></span>
            <span className="title">Help</span>
          </a>
        </li>
        <li className="list">
          <a href="#">
            <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
            <span className="title">Password</span>
          </a>
        </li>
        <li className="list">
          <a href="#">
            <span className="icon"><ion-icon name="log-out-outline"></ion-icon></span>
            <span className="title">Sign Out</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
