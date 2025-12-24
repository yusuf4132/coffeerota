import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  return (
    <header>
      <h1>
        <Logo />
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