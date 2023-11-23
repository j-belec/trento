function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contacto</h2>
      <div className="box">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8336.429273758182!2d-58.37625393718666!3d-34.64566068525262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb4db1d2662d%3A0xaf3ec9bb3c95777!2sGral.%20Hornos%201460%2C%20C1267%20CABA!5e0!3m2!1ses-419!2sar!4v1700682605304!5m2!1ses-419!2sar"
            title="google maps location"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="form-box">
          <form action="POST" className="form">
            <div className="form__group">
              <input
                className="form__input"
                type="text"
                name="fullname"
                placeholder="Nombre y Apellido"
                required
              />
              <label className="form__label" htmlFor="fullname">
                Nombre Completo
              </label>
            </div>
            <div className="form__group">
              <input
                className="form__input"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <label className="form__label" htmlFor="email">
                Dirección de correo electrónico
              </label>
            </div>
            <div className="form__group">
              <input
                className="form__input"
                type="tel"
                name="phone"
                placeholder="11-4532-0998"
                required
              />
              <label className="form__label" htmlFor="phone">
                Número de celular o teléfono fijo
              </label>
            </div>
            <div className="form__group">
              <textarea
                className="form__input form__textarea"
                type="text"
                name="consultation"
                placeholder="Consulta"
                required
              />
              <label className="form__label" htmlFor="consultation">
                Dejá un mensaje
              </label>
            </div>
            <div className="form__group">
              <button className="send">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
