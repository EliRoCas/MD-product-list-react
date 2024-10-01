import { useState } from 'react';
import PropTypes from 'prop-types';

import Input from '../elements/Input';
import Button from '../elements/Button';
import './form.scss';

const Form = ({ addItem }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem({ title, description, image });
    setTitle('');
    setDescription('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <Input
        type="text"
        placeholder="Ingrese un numero"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        placeholder="Escriba un dato curioso del numero ingresado"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        isTextarea={true}
      />
      <Input
        type="text"
        placeholder="URL de la imagen"
        value={image}
        onChange={(event) => setImage(event.target.value)}
      />
      <Button text="Agregar Elemento" handleButton={handleSubmit}/>
    </form>
  );
};

Form.propTypes = {
  addItem: PropTypes.func.isRequired,
}

export default Form;
