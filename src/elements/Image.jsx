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

// Prueba de funcionamiento del elemento atómico Image
// import PropTypes from "prop-types";

// const Image = () => {
//   return (
//     <figure className="cardImg">
//       <img
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrIaOoNLKb_PGfc_nS4s3IVBC8x7x9nYOqQ&s"
//         alt="Test"
//       />
//     </figure>
//   );
// };

// Image.propTypes = {
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
// };

// export default Image;
