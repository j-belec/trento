// import {
//   APIProvider,
//   Map,
//   AdvancedMarker,
//   Pin,
//   // InfoWindow,
// } from "@vis.gl/react-google-maps";

function Contact() {
  // const position = { lat: -34.64327503305144, lng: -58.375273128835794 };
  // const TrentoAPI = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return (
    <section className="contact">
      <h2>Contacto</h2>
      <div className="box">
        <div className="map">
          {/* <APIProvider apikey={TrentoAPI}>
            <div>
              <Map zoom={9} center={position} mapId="f60bcf886db1f811">
                <AdvancedMarker>
                  <Pin
                    background={"red"}
                    borderColor={"white"}
                    glyphColor={"white"}
                  />
                </AdvancedMarker>
              </Map>
            </div>
          </APIProvider> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8336.429273758182!2d-58.37625393718666!3d-34.64566068525262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb4db1d2662d%3A0xaf3ec9bb3c95777!2sGral.%20Hornos%201460%2C%20C1267%20CABA!5e0!3m2!1ses-419!2sar!4v1700682605304!5m2!1ses-419!2sar"
            title="google maps location"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <form action="POST">
          <label htmlFor="fullname">Nombre Completo</label>
          <input type="text" name="fullname" placeholder="Nombre y Apellido" />
          <label htmlFor="email">Dirección de correo electrónico</label>
          <input type="text" name="email" placeholder="Email" />
          <label htmlFor="phone">Número de celular o teléfono fijo</label>
          <input type="number" name="phone" placeholder="Teléfono" />
          <label htmlFor="consultation">Dejá un mensaje</label>
          <textarea type="text" name="consultation" placeholder="Consulta" />
          <button className="send">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
