import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="coffee-shop-footer">
        <Logo />
        <div className="site-links">
          <nav className="links-container">
            <Link style={{ paddingRight: "20px" }} to="/">Ana Sayfa</Link>
            <Link style={{ paddingRight: "20px" }} to="/about">Hakkımızda</Link>
            <Link style={{ paddingRight: "20px" }} to="/menu">Menü</Link>
            <Link to="/visit">Ziyaret Edin</Link>
          </nav>
        </div>
        <div className="other">
          <div className="contact-info">
            <div className="info hours"><span className="icon fa-regular fa-clock fa-fw" aria-hidden="true"></span> Çalışma Saatleri: Hergün 10:00 - 00:00</div>
            <div className="info address">
              <span className="icon fa-solid fa-location-dot fa-fw" aria-hidden="true"></span> <address>555 Espresso Lane Mochaville FL 55555</address>
            </div>
            <div className="info phone"><span className="icon fa-solid fa-phone fa-fw" aria-hidden="true"></span> <address>
              <a href="tel:5415613845">(541) 561-3845</a>
            </address></div>
          </div>
          <div className="social-media-links">
            {/*<a href="" target="_blank" aria-label="Our Facebook page" title="Facebook">
              <span className="fa-brands fa-facebook fa-fw"></span>
  </a>*/}
            <a href="https://www.instagram.com/coffeerota/" target="_blank" aria-label="coffeerota" title="Instagram">İnstagram:
              <span className="fa-brands fa-instagram fa-fw"></span>
            </a>
            {/*<a href="" target="_blank" aria-label="Our Bluesky account" title="Bluesky">
              <span className="fa-brands fa-bluesky fa-fw"></span>
</a>*/}
          </div>
        </div>
      </div>
      <hr />
      <nav style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
        <NavLink style={{ paddingRight: "20px" }} to="/admin-login">Yönetici Girişi</NavLink>
      </nav>
      <div className="app-footer">Tüm Hakları Saklıdır {new Date().getFullYear()}</div>
    </footer>
  );
}

export default Footer;