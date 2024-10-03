import PropTypes from "prop-types";

import Form from "../components/Form";

import "./formpage.scss";

const FormPage = ({ setScreen }) => {
  return (
    <div className="formPage">
      <Form setScreen={setScreen} />
    </div>
  );
};

FormPage.propTypes = {
  setScreen: PropTypes.func.isRequired,
};

export default FormPage;
