import { useRef } from "react";
import PropTypes from "prop-types";
import Modal, { ModalContext } from "../modal/Modal";

const TrailerModal = ({ item }) => {
  const iframeRef = useRef(null);

  const onClose = () => iframeRef.current.setAttribute("src", "");

  return (
    <Modal active={false} id={`modal_${item.id}`}>
      <ModalContext>
        <iframe
          ref={iframeRef}
          width="100%"
          height="100%"
          title={"trailer"}
        ></iframe>
      </ModalContext>
    </Modal>
  );
};

TrailerModal.propTypes = {
  item: PropTypes.object.isRequired,
};

export default TrailerModal;
