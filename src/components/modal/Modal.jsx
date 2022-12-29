import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

import "./modal.scss";

const Modal = (props) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  return (
    <div id={props.id} className={`modal ${active ? "active" : ""}`}>
      {props.children}
    </div>
  );
};

Modal.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.string,
  children: PropTypes.node,
};

export const ModalContext = (props) => {
  const contentRef = useRef(null);

  const closeModal = (props) => {
    contentRef.current.parentNode.remove("active");
    if (props.onClose) {
      props.onClose();
    }
  };

  return (
    <div ref={contentRef} className="modal__content">
      {props.children}
      <div className="modal__content__close" onClick={closeModal}>
        <b>&#10006;</b>
      </div>
    </div>
  );
};

ModalContext.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;
