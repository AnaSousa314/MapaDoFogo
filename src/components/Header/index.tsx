import React from 'react';
import './style.css';

import logo from '../../img/logo.svg';
import { Link } from 'react-router-dom';

export default function Header(){
  return(
    <>
      <header className="app-top">
          <Link to="/" className="logo">
            <img src={logo} alt="Fire" />
          </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
          <ul className="menu">
            <li>
              <Link to="/" >Home</Link> 
            </li>
            <li>
              <Link to="" >Sobre</Link>          
            </li>
          </ul>
      </header>
    </>
  )
} 