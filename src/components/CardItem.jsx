// import PropTypes from "prop-types";
// import Image from "../elements/Image";
// import Title from "../elements/Title";
// import Description from "../elements/Description";

// const CardItem = ({ img, title, description }) => {
//   return (
//     <div className="cardItem">
//       <Image img={img} alt={title} />
//       <Title title={title} />
//       <Description description={description} />
//     </div>
//   );
// };

// CardItem.propTypes = {
//   img: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// };

// export default CardItem;

// Prueba del componente (molecular) CardItem
import PropTypes from "prop-types";

const CardItem = ({ img, title, description }) => {
  return (
    <div>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

CardItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardItem;
