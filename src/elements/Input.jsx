import PropTypes from 'prop-types';
import './input.scss'


const Input = ({ type, placeholder, value, onChange, checked, onCheckChange }) => {
  switch (type) {
    case 'checkbox':
      return (
        <label className='checkboxlabel'>
          <input 
            type='checkbox'
            checked={checked}
            onChange={onCheckChange}
          />
          {placeholder}
        </label>
      );
    case 'textarea':
      return (
        <textarea
          className='input'
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      );
    default:
      return (
        <input 
        className='input'
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        />
      );
  }
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'textarea', 'checkbox']).isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  onCheckChange: PropTypes.func,
};

export default Input;