import PropTypes from "prop-types";
import FormPage from "../sections/FormPage";

const FormScreen = ({ setScreen }) => {
  return (
    <div className="formScreen">
      <FormPage setScreen={setScreen} />
    </div>
  );
};

FormScreen.propTypes = {
  setScreen: PropTypes.func.isRequired,
};
export default FormScreen;
