import PropTypes from "prop-types";
import s from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  return (
    <div className={s.card} onClick={() => onClick(image)}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={s.image}
      />
    </div>
  );
};

ImageCard.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageCard;
