import Doctors from "../assets/intro-doctors.svg";

function Intro() {
  return (
    <section className="intro">
      <div>
        <h1>
          Administramos todos los servicios requeridos por empresas del sector
          de la salud.
        </h1>
        <img src={Doctors} alt="doctors working" className="doctors" />
      </div>
    </section>
  );
}

export default Intro;
