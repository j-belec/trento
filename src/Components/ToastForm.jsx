import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function ToastForm(props) {
  return (
    <div
      className={[
        "toast",
        props.transitionState === "entering"
          ? "toast-show"
          : props.transitionState === "entered"
          ? "toast-showing"
          : props.transitionState === "exiting"
          ? "toast-closing"
          : null,
      ].join(" ")}
      style={{ backgroundColor: props.bgColor }}
    >
      <p>Formulario enviado!</p>
      <FontAwesomeIcon
        icon={faClose}
        className="toast-close"
        onClick={props.closeFn}
      />
      <div className="progress-bar"></div>
    </div>
  );
}

export default ToastForm;
