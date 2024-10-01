import PropTypes from 'prop-types';
import './input.scss'


const Input = ({ type, placeholder, value, onChange, isTextarea }) => {
  return (
    <>
      {isTextarea ? (
        <textarea
          className='input'
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ) : (
      <input 
          className='input'
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
      />
    )}    
    </>
  );
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    isTextarea: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  isTextarea: false,
};


export default Input;