import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css"
import logo from "../assets/logo.png"

export function Navbar() {
 return (
  <body>
   <header className="header">

    <img className="logo" src={logo}></img>
    
     <nav className="nav__container">

         <ul className="nav__list">

           <li className="nav__item">
             <NavLink to="/" className="nav__link">Home</NavLink>
           </li>
           
           <li className="nav__item">
             <NavLink to="/about" className="nav__link">About</NavLink>
           </li>
           
           <li className="nav__item">
             <NavLink to="/contact" className="nav__link">Contact</NavLink>
           </li>

         </ul>
         

         {/*<div className="nav__close" id="nav-close">
           <IoClose />
         </div>

       </div>

       <div className="nav__toggle" id="nav-toggle">
         <IoMenu />
       /div>*/}

     </nav>
     
   </header>

  </body>
 );
};