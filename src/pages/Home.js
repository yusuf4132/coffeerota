import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import logo2 from "../assets/isma_yazi.png"

const Home = () => {
  useEffect(() => {
    const toggleButton = document.querySelector(".toggle-button");
    const navList = document.querySelector(".navlist");
    const navLinks = document.querySelectorAll(".navlist a");

    if (toggleButton) {
      toggleButton.addEventListener("click", () => {
        navList.classList.toggle("active");
      });
    }

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navList.classList.remove("active");
      });
    });
  }, []);

  return (
    <React.Fragment>
      {/* HERO */}
      <section className="hero">
        <div className="hero_split left">
          <div className="content">

          <h1 style={{display:"flex",alignItems:'center',justifyContent:'center'}}>
      <img src={logo2} style={{width:'200px',marginTop:'10px'}}></img>
      </h1>
            <p className="subtitle">
              Mantén tus sueños despiertos con una taza de café que despierta tus sentidos
              y te impulsa a conquistar el día.
            </p>

            <section className="main-content home">
              <section className="content-container info">
                <div className="info-container menu-info" >
                  <h2>Coffee, Espresso, Çay, ve dahası...</h2>
                  <Link to="/menu" className="button">Menüyü Görüntüleyin</Link> </div>
                <div className="info-container wifi-info">
                  <h2>Tüm müşterilerimiz için ücretsiz Wi-Fi mevcuttur!</h2> <p>Şifre : <span className="wifi-password">rotacoffee</span></p> </div>
              </section>
            </section>

            {/* 3 kahve görseli ALTTA */}
            <div className="middle">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>

          </div>
        </div>
      </section>

    </React.Fragment>
  );
};

{/*return (
    <section className="main-content home">
      <section className="content-container welcome">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Venenatis tellus in metus vulputate eu.</p>
      </section>
      <section className="content-container image-gallery">
        <ImageGallery />
      </section>
      <section className="content-container info">
        <div className="info-container menu-info">
          <h2>Coffee, Espresso, Çay, ve dahası...</h2>
          <Link to="/menu" className="button">Menüyü Görüntüleyin</Link>
        </div>
        <div className="info-container wifi-info">
          <h2>Tüm müşterilerimiz için ücretsiz Wi-Fi mevcuttur!</h2>
          <p>Şifre :  <span className="wifi-password">rotacoffee</span></p>
        </div>
      </section>
    </section>
  );
}*/}

export default Home;