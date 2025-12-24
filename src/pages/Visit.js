import React from 'react';
import HeroBanner from '../components/HeroBanner';
import visitHeroBanner from '../assets/images/visit-hero-banner.jpg';

const Visit = () => {
  return (
    <React.Fragment>
      <HeroBanner heading="ZİYARET EDİN" imageFile={visitHeroBanner} />
      <section className="main-content visit">
        <h3>Çalışma Saatleri</h3>
        <div className="info">Hergün 10:00 - 00:00</div>
        <h3>Telefon</h3>
        <div className="info">
          <address>
            <a href="tel:5415613845">(541) 561-3845</a>
          </address>
        </div>
        <h3>İnstagram</h3>
        <div className="info">
          <address>
            <a href="https://www.instagram.com/coffeerota/">coffeerota</a>
          </address>
        </div>
        <h3>Email</h3>
        <div className="info">
          <address>
            <a href="mailto:coffee.grounds@realemail.com">coffeerota@gmail.com</a>
          </address>
        </div>
        <h3>Adres</h3>
        <div className="info">
          <address>555 Espresso Lane Mochaville FL 55555</address>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Visit;