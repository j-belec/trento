import ShareLocationOutlinedIcon from "@mui/icons-material/ShareLocationOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";

function Services() {
  return (
    <section className="services" id="services">
      <div className="wave-top"></div>
      <h2 className="services__tittle">Servicios</h2>
      <div className="services__card-container">
        <div className="services__card">
          <MedicationOutlinedIcon className="services__card--icon" />
          <p>
            Distribución y venta de fármacos diseñados para tratamientos
            especiales.
          </p>
        </div>
        <div className="services__card">
          <ManageAccountsOutlinedIcon className="services__card--icon" />
          <p>
            Administramos todos los servicios requeridos por empresas del sector
            de la salud.
          </p>
        </div>
        <div className="services__card">
          <QueryStatsOutlinedIcon className="services__card--icon" />
          <p>
            Ofrecemos análisis estadísticos y bases de datos de cualquier
            producto farmacéutico o miembro afiliado.
          </p>
        </div>
        <div className="services__card">
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
