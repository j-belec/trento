import { useEffect } from "react";

function QualityPolitics() {
  useEffect(() => {
    const observerCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("politics-show");
          }, 400);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback);

    const hiddenElements = document.querySelectorAll(".politics-hidden");
    hiddenElements.forEach(el => observer.observe(el));

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      hiddenElements.forEach(el => observer.unobserve(el));
    };
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  return (
    <section className="qp" id="quality-politics">
      <h2 className="qp__title">Política de calidad</h2>
      <div className="qp-part1">
        <div className="qp-part1__img-container">
          <img src="qp-top.svg" alt="" className="qp-part1__img" />
        </div>
        <div className="qp-part1__text-container">
          <p className="qp-part1__text politics-hidden">
            En Trento Insumos Médicos estamos comprometidos con la entrega de
            productos y servicios de calidad excepcional para satisfacer las
            necesidades de nuestros clientes y contribuir a la mejora de la
            atención médica.
          </p>

          <p className="qp-part1__text politics-hidden">
            Nos esforzamos por comprender y superar las expectativas de nuestros
            clientes.
          </p>
          <p className="qp-part1__text politics-hidden">
            Escuchamos sus necesidades, respondemos de manera proactiva y
            ofrecemos productos y servicios que cumplen con los más altos
            estándares de calidad y seguridad.
          </p>
          <p className="qp-part1__text politics-hidden">
            Promovemos un entorno de trabajo en el que cada miembro del equipo
            esté comprometido con la excelencia y busque oportunidades de
            mejora.
          </p>
          <p className="qp-part1__text politics-hidden">
            Cumplimos con todos los requisitos legales y normativos aplicables a
            la distribución de insumos médicos.
          </p>
        </div>
      </div>
      <div className="qp-part2">
        <div className="qp-part2__text-container">
          <p className="qp-part2__text politics-hidden">
            Mantenemos un estricto control de calidad y aseguramos la
            trazabilidad de nuestros productos.
          </p>
          <p className="qp-part2__text politics-hidden">
            Reconocemos que cada empleado desempeña un papel fundamental en
            nuestro éxito y les brindamos capacitación y recursos para lograrlo.
          </p>
          <p className="qp-part2__text politics-hidden">
            Mantenemos una comunicación abierta y efectiva con nuestros
            clientes, proveedores y empleados.
          </p>
          <p className="qp-part2__text politics-hidden">
            Esta política de calidad es un compromiso continuo y un marco de
            referencia para nuestra organización. Establece las bases para el
            desarrollo y la implementación de nuestro sistema de gestión de
            calidad, y se revisa regularmente para asegurarse de que sigue
            siendo relevante y efectiva.
          </p>
        </div>
        <div className="qp-part2__img-container">
          <img src="qp-bottom.svg" alt="" className="qp-part2__img" />
        </div>
      </div>
    </section>
  );
}

export default QualityPolitics;
