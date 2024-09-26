import PropTypes from 'prop-types';


const Button = ({text, handleButton}) => {
    return (
        <>
         <button onClick={handleButton} >{text}</button>   
        </>
    );
};


Button.propTypes = {
    text: PropTypes.string.isRequired,
    handleButton: PropTypes.func.isRequired,
};


export default Button;
