import PropTypes from "prop-types";
import "./description.scss";

const Description = ({ description }) => {
  return (
    <div className="cardDescription">
      <p>{description}</p>
    </div>
  );
};

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;


