import ShareLocationOutlinedIcon from "@mui/icons-material/ShareLocationOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import { useEffect } from "react";

function Services() {
  useEffect(() => {
    const observerCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("services-show");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback);

    const hiddenElements = document.querySelectorAll(".services-hidden");
    hiddenElements.forEach(el => observer.observe(el));

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      hiddenElements.forEach(el => observer.unobserve(el));
    };
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  return (
    <section className="services" id="services">
      <div className="wave-top"></div>
      <h2 className="services__tittle">Servicios</h2>
      <div className="services__card-container">
        <div className="services__card services-hidden">
          <MedicationOutlinedIcon className="services__card--icon" />
          <p>
            Distribución y venta de fármacos diseñados para tratamientos
            especiales.
          </p>
        </div>
        <div className="services__card services-hidden">
          <QueryStatsOutlinedIcon className="services__card--icon" />
          <p>
            Ofrecemos análisis estadísticos y bases de datos de cualquier
            producto farmacéutico o miembro afiliado.
          </p>
        </div>
        <div className="services__card services-hidden">
          <ManageAccountsOutlinedIcon className="services__card--icon" />
          <p>
            Administramos todos los servicios requeridos por empresas del sector
            de la salud.
          </p>
        </div>
        <div className="services__card services-hidden">
          <ShareLocationOutlinedIcon className="services__card--icon" />
          <p>
            Sistema de rastreo de pedidos que permite a los clientes verificar
            el estado y la fecha de entrefa de sus solicitudes.
          </p>
        </div>
      </div>
      <div className="wave-btm"></div>
    </section>
  );
}

export default Services;
