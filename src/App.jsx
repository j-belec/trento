import ReactDOM from "react-dom";
import AboutUs from "./Components/AboutUs";
import MobileNav from "./Components/MobileNav";
import { useState } from "react";
import Header from "./Components/Header";
import Services from "./Components/Services";

const overlays = document.getElementById("overlays");

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleNav = () => {
    setMobileNavOpen((state) => !state);
  };

  return (
    <div>
      {mobileNavOpen &&
        ReactDOM.createPortal(<MobileNav onMenuClick={toggleNav} />, overlays)}
      <Header mobNavOpen={mobileNavOpen} onMenuClick={toggleNav} />
      <AboutUs />
      <Services />
    </div>
  );
}

export default App;
