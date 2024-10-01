import { useState } from 'react';
import PropTypes from 'prop-types';


import Form from '../components/Form';
import {getData} from '../services/ApiService'


const FormPage = ({ addItem }) => {
  const [useRandomImage, setUseRandomImage] = useState(false);

  const handleAddItem = async (item) => {
    let img = item.image;

    if (useRandomImage) {
      try {
        const digimonData = await getData();
        img = digimonData[0].img; // Selecciona la primera imagen aleatoria
      } catch (error) {
        console.error("Error al obtener la imagen aleatoria de Digimon.", error);
      }
    }

    addItem({ ...item, img });
  };

  return (
    <div className="formPage">
      <Form addItem={handleAddItem} />
      <label>
        <input
          type="checkbox"
          checked={useRandomImage}
          onChange={() => setUseRandomImage(!useRandomImage)}
        />
        Usar imagen aleatoria de Digimon
      </label>
    </div>
  );
};

FormPage.propTypes = {
  addItem: PropTypes.func.isRequired,
};




// const FormPage = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ title, description });
//     setTitle('');
//     setDescription('');
//   };

//   return (

//     <Form />
    
//   );
// };

export default FormPage;
