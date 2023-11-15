function MobileNav(props) {
  return (
    <>
      <div className={"mobile-nav__bg"}>
        <img src="blob-mob-nav.svg" alt="background blob" />
      </div>
      <nav className="mobile-nav">
        <ul>
          <li onClick={props.onMenuClick}>
            <a href="#about-us">Quiénes somos</a>
          </li>
          <li onClick={props.onMenuClick}>
            <a href="#services">Servicios</a>
          </li>
          <li onClick={props.onMenuClick}>
            <a href="#quality-politics">Política de calidad</a>
          </li>
          <li onClick={props.onMenuClick}>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default MobileNav;
