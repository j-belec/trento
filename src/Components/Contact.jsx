// import {
//   APIProvider,
//   Map,
//   AdvancedMarker,
//   Pin,
//   // InfoWindow,
// } from "@vis.gl/react-google-maps";

function Contact() {
  const position = { lat: -34.64327503305144, lng: -58.375273128835794 };
  const TrentoAPI = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

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
