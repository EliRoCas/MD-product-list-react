// import PropTypes from "prop-types";

// const Description = ({ description }) => {
//   return (
//     <div className="cardDescription">
//       <p>{description}</p>
//     </div>
//   );
// };

// Description.propTypes = {
//   description: PropTypes.string.isRequired,
// };

// export default Description;

// Prueba de funcionamiento del elemento atómico Description
import PropTypes from "prop-types";

const Description = () => {
  return (
    <div className="cardDescription">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, suscipit.
        Culpa amet quis aperiam, omnis expedita eos commodi voluptatibus
        architecto dolores blanditiis! Incidunt vitae cupiditate, repellat minus
        placeat autem itaque?
      </p>
    </div>
  );
};

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
