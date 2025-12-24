import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import logo2 from "../assets/ismay.png"

const Header = () => {
  return (
    <header>
      <h1 style={{display:"flex",alignItems:'center',justifyContent:'center'}}>
      <img src={logo2} style={{width:'130px',marginTop:'10px'}}></img>
      </h1>
      <nav >
      <NavLink style={{ paddingRight: "10px" }} to="/">Ana Sayfa</NavLink>
        <NavLink style={{ paddingRight: "10px" }} to="/menu">Menü</NavLink>
        <NavLink style={{ paddingRight: "10px" }} to="/visit">Ziyaret Edin</NavLink>
        <NavLink  to="/about">Hakkımızda</NavLink>
      </nav>
    </header>
  );
}

export default Header;