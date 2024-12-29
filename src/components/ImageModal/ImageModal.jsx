import { useEffect } from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import styles from "./ImageModal.module.css";

const Modal = ({ isOpen, onClose, children, image }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => document.body.classList.remove("no-scroll");
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      ariaHideApp={false}
    >
      {image && (
        <div className={styles.content}>
          <img
            src={image.urls.regular}
            alt={image.alt_description || "Image"}
            className={styles.image}
          />
          <p className={styles.description}>
            {image.description || "No description available"}
          </p>
          <p className={styles.author}>Author: {image.user.name}</p>
        </div>
      )}
      <button onClick={onClose} className={styles.closeBtn}>
        ✕
      </button>
      {children}
    </ReactModal>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
