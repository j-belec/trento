import { Sling as Hamburger } from "hamburger-react";

function Header(props) {
  return (
    <div className="header">
      {/* DESKTOP */}
      <div className="header-desktop">
        <div className="header-desktop__logo">
          <h1>Trento</h1>
          <div className="header-desktop__logo-vl" />
          <span>
            Insumos
            <br />
            médicos
          </span>
        </div>
        <ul className="header-desktop__items-container">
          <li>
            <a href="/" className="header-desktop__item">
              Quiénes somos
            </a>
          </li>
          <li>
            <a href="/" className="header-desktop__item">
              Servicios
            </a>
          </li>
          <li>
            <a href="/" className="header-desktop__item">
              Política de calidad
            </a>
          </li>
        </ul>
        <div className="header-desktop__contact-container">
          <a href="/" className="header-desktop__contact">
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
