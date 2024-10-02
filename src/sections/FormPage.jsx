import PropTypes from 'prop-types';

import Form from '../components/Form';

import './formpage.scss';

const FormPage = ({ addItem }) => {
  return (
    <div className="formPage">
      <Form addItem={addItem} />
    </div>
  );
};

FormPage.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default FormPage;
