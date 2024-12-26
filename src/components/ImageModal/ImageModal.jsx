import ReactModal from "react-modal";
import PropTypes from "prop-types";
import styles from "./ImageModal.module.css";

ReactModal.setAppElement("#root");

const ImageModal = ({ isOpen, image, onClose }) => {
  const handleRequestClose = () => {
    onClose();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      closeTimeoutMS={300}
    >
      {image && (
        <div className={styles.content}>
          <img
            src={image.urls.regular}
            alt={image.alt_description}
            className={styles.image}
          />
          <p className={styles.description}>
            {image.description || "No description available"}
          </p>
          <p className={styles.author}>Author: {image.user.name}</p>
        </div>
      )}
    </ReactModal>
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  image: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

export default ImageModal;
