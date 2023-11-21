import ReactDOM from "react-dom";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import MobileNav from "./Components/MobileNav";
import { useState } from "react";
// import Header from "./Components/Header";
import Contact from "./Components/Contact";

import IntroBckg from "./Assets/intro-bckg.png";
import ContactBckg from "./Assets/contact-bckg.png";
import RedWave from "./Assets/wave-haikei.svg";
import Intro from "./Components/Intro";

const overlays = document.getElementById("overlays");

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleNav = () => {
    setMobileNavOpen((state) => !state);
  };

  return (
    <div className="main-container">
      {mobileNavOpen &&
        ReactDOM.createPortal(<MobileNav onMenuClick={toggleNav} />, overlays)}
      <img src={IntroBckg} alt="intro bckg" className="pharmacy-img1" />
      {/* <Header mobNavOpen={mobileNavOpen} onMenuClick={toggleNav} /> */}
      <Intro />
      <AboutUs />
      <Contact />
      <Footer />
      <img src={ContactBckg} alt="contact bckg" className="pharmacy-img2" />
      <img src={RedWave} alt="red background wave color" className="red-wave" />
    </div>
  );
}

export default App;
