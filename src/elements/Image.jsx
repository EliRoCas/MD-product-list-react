import PropTypes from "prop-types";
import "./image.scss";

const Image = ({ img, alt }) => {
  return (
    <figure className="cardImg">
      <img src={img} alt={alt} />
    </figure>
  );
};

Image.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
