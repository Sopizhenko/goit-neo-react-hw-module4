import Styles from "./ImageModal.module.css";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    background: "rgba(0, 0, 0, 0.8)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "transparent",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
  },
};

const ImageModal = ({ image, onClose, isOpen }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={Styles.image}
      />
      <div className={Styles.info}>
        <p className={Styles.author}>
          <b>Author: </b>
          <span>
            {image.user.last_name} {image.user.first_name}
          </span>
        </p>
      </div>
    </Modal>
  );
};

export default ImageModal;
