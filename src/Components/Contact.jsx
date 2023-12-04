import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import useInputValidation from "../Hooks/useInputValidation";
import { Transition } from "react-transition-group";
import ToastForm from "./ToastForm";

function Contact() {
  const formRef = useRef();
  const nodeRef = useRef(null);
  const [showToast, setShowToast] = useState(false);
  const [toastColor, setToastColor] = useState("");
  const [toastContent, setToastContent] = useState("");
  const closeToast = () => setShowToast(false);

  const regularExpressions = {
    fullname: /^[a-zA-ZÁ-ÿ\s]{2,100}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  // Validacion inputs
  const {
    value: fullnameValue,
    isValid: fullnameIsValid,
    valueChangeHandler: fullnameChangeHandler,
    inputBlurHandler: fullnameBlurHandler,
    reset: resetFullname,
  } = useInputValidation((value) => regularExpressions.fullname.test(value));

  const {
    value: emailValue,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInputValidation((value) => regularExpressions.email.test(value));

  const {
    value: numberValue,
    isValid: numberIsValid,
    valueChangeHandler: numberChangeHandler,
    inputBlurHandler: numberBlurHandler,
    reset: resetNumber,
  } = useInputValidation((value) => value !== "");

  const {
    value: messageValue,
    isValid: messageIsValid,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage,
  } = useInputValidation((value) => value !== "");

  // Validacion form
  let formIsValid = false;

  if (fullnameIsValid && emailIsValid && numberIsValid && messageIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    //From this point the form is validated and ready to be sent or else.
    resetFullname();
    resetEmail();
    resetMessage();
    resetNumber();

    // Sending mail
    emailjs
      .sendForm(
        "service_l08kwwb",
        "template_1az1rvq",
        formRef.current,
        "pNq_BVvuf-lL9PnDb"
      )
      .then((result) => {
        console.log(result, result.text);
        setToastContent("¡Formulario enviado!");
        // setToastColor("var(--confirmation-color)");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
        // Resetting all values to ""
        resetFullname();
        resetEmail();
        resetMessage();
        resetNumber();
      })
      .catch((err) => {
        console.log(err.text);
        setToastContent("Algo salió mal.");
        setToastColor("var(--accent-color)");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
      });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contacto</h2>
      <Transition in={showToast} timeout={200} nodeRef={nodeRef}>
        {(state) => (
          <ToastForm
            closeFn={closeToast}
            transitionState={state}
            bgColor={toastColor}
            content={toastContent}
          />
        )}
      </Transition>
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
          <form
            action="POST"
            ref={formRef}
            onSubmit={submitHandler}
            className="form"
          >
            <div className="form__group">
              <input
                className="form__input"
                type="text"
                name="fullname"
                placeholder="Nombre y Apellido"
                value={fullnameValue}
                onChange={fullnameChangeHandler}
                onBlur={fullnameBlurHandler}
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
                value={emailValue}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
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
                value={numberValue}
                onChange={numberChangeHandler}
                onBlur={numberBlurHandler}
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
                value={messageValue}
                onChange={messageChangeHandler}
                onBlur={messageBlurHandler}
                required
              />
              <label className="form__label" htmlFor="consultation">
                Dejá un mensaje
              </label>
            </div>
            <div className="form__group">
              <button className="send" disabled={!formIsValid}>
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
