import PropTypes from "prop-types";
import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => (
  <button className={s.button} onClick={onClick}>
    Load more
  </button>
);

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
