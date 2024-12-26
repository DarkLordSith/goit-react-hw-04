import PropTypes from "prop-types";
import s from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => <p className={s.error}>{message}</p>;

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
