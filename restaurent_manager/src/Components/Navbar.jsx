import React from 'react';
import "../Styles/Navbar.css";
import{NavLink}from "react-router-dom";
const Navbar= () =>{
        return (
              <nav className="navbar">
              <div className='logonav'>
              <NavLink to="/" className='logonav-nav'> &#60; Restaurent-App &#47; &#62;</NavLink>
              </div>
              <div className='menu'>
              <ul>
                      <NavLink to="/addresturent" className='menulinks'>Add-Resturent</NavLink>
              </ul>
              </div>
            </nav>
        );
      };
      Navbar.protoTypes={};
      export default Navbar;
      