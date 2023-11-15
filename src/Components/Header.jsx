import { Sling as Hamburger } from "hamburger-react";

function Header(props) {
  return (
    <div className="header">
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
