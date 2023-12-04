import { Sling as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";

function Header(props) {
  const [background, setBackground] = useState(false);

  useEffect(() => {
    const obsOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    };

    const obsCallback = ([entry]) => {
      if (!entry.isIntersecting) {
        setBackground(false);
      } else {
        setBackground(true);
      }
    };

    const observer = new IntersectionObserver(obsCallback, obsOptions);
    const target = document.getElementById("intro");

    observer.observe(target);
  }, []);

  let headerClass = background ? "header" : "header header-bg-visible";

  return (
    <div className={headerClass} id="header">
      {/* DESKTOP */}
      <div className="header-desktop">
        <a href="/" className="header-desktop__logo">
          {/* <h1>Trento</h1>
          <div className="header-desktop__logo-vl" />
          <span>
            Insumos
            <br />
            médicos
          </span> */}
          <img
            src="logo.png"
            alt="trento logo"
            className="header-desktop__logo"
          />
        </a>
        <ul className="header-desktop__items-container">
          <li>
            <a href="#about-us" className="header-desktop__item">
              Quiénes somos
            </a>
          </li>
          <li>
            <a href="#services" className="header-desktop__item">
              Servicios
            </a>
          </li>
          <li>
            <a href="#quality-politics" className="header-desktop__item">
              Política de calidad
            </a>
          </li>
        </ul>
        <div className="header-desktop__contact-container">
          <a href="#contact" className="header-desktop__contact">
            Contacto
          </a>
        </div>
      </div>
      {/* MOBILE */}
      <div className="header-mobile">
        <div className="logo">
          <h1>Trento</h1>
          <div className="logo__vl" />
          <span>
            Insumos
            <br />
            médicos
          </span>
        </div>
        <div onClick={props.onMenuClick} className="mobile-nav-icon">
          <Hamburger
            toggled={props.mobNavOpen}
            hideOutline={true}
            color="#fff"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
