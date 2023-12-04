import { useEffect, useRef } from "react";

function AboutUs() {
  // const row1Ref = useRef(null);
  // const row2Ref = useRef(null);

  // const observer = new IntersectionObserver(entries => {
  //   entries.forEach(entry => {
  //     console.log(entry);
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add("about-show");
  //     } else {
  //       entry.target.classList.remove("about-show");
  //     }
  //   });
  // });

  // const hiddenElements = document.querySelectorAll(".hidden");
  // hiddenElements.forEach(el => observer.observe(el));

  useEffect(() => {
    const observerCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("about-show");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback);

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach(el => observer.observe(el));

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      hiddenElements.forEach(el => observer.unobserve(el));
    };
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  return (
    <section className="about-us" id="about-us">
      <h2>Quiénes somos</h2>
      <div className="about-us__row row-1 hidden">
        <div className="image-side">
          <div className="background-box">
            <img src="about-us-1.jpg" alt="pharmaceutical store" />
          </div>
        </div>
        <div className="text-side">
          <h3>Nuestra misión</h3>
          <p>
            Trento Insumos Médicos es una empresa dedicada a la distribución de
            productos médicos desechables de alta calidad a instalaciones de
            atención médica, clínicas, hospitales, obras sociales y otros
            proveedores de atención médica. Nuestra misión es mejorar la
            atención y seguridad del paciente al garantizar la disponibilidad de
            suministros médicos confiables y esenciales. A través de una amplia
            gama de productos, una red de distribución eficiente y un enfoque
            centrado en el cliente, aspiramos a convertirnos en un socio
            confiable en la cadena de suministro médico, promoviendo mejores
            resultados en la atención médica.
          </p>
        </div>
      </div>
      <div className="about-us__row row-2 hidden">
        <div className="image-side">
          <div className="background-box">
            <img
              src="about-us-2.jpg"
              alt="doctor with tablets of medic pills"
            />
          </div>
        </div>
        <div className="text-side">
          <h3>Lo que ofrecemos</h3>
          <p>
            Trento Insumos Médicos es una empresa dedicada a la distribución de
            productos médicos desechables de alta calidad a instalaciones de
            atención médica, clínicas, hospitales, obras sociales y otros
            proveedores de atención médica. Nuestra misión es mejorar la
            atención y seguridad del paciente al garantizar la disponibilidad de
            suministros médicos confiables y esenciales. A través de una amplia
            gama de productos, una red de distribución eficiente y un enfoque
            centrado en el cliente, aspiramos a convertirnos en un socio
            confiable en la cadena de suministro médico, promoviendo mejores
            resultados en la atención médica.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
