import PropTypes from 'prop-types';
import './button.scss';


const Button = ({text, handleButton}) => {
    return (
        <>
         <button className='cardBtn' onClick={handleButton} >{text}</button>   
        </>
    );
};


Button.propTypes = {
    text: PropTypes.string.isRequired,
    handleButton: PropTypes.func.isRequired,
};


export default Button;
