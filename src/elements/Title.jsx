import PropTypes from "prop-types";

const Title = ({ title }) => {
  return <h3 className="cardTitle">{title}</h3>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;

// Prueba de funcionamiento del elemento atómico Title
// import PropTypes from "prop-types";

// const Title = () => {
//   return (
//     < h3 className="cardTitle">
//       Test
//     </h3>
//   );
// };

// Title.propTypes = {
//   title: PropTypes.string.isRequired,
// };

// export default Title;
