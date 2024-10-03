import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

import { CardContext } from "../contexts/CardContext";

import Input from "../elements/Input";
import Button from "../elements/Button";
import { getData } from "../services/ApiService";

import "./form.scss";

const Form = ({ setScreen }) => {
  const { addCard } = useContext(CardContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [useRandomImage, setUseRandomImage] = useState(false);

  useEffect(() => {
    const fetchRandomImage = async () => {
      if (useRandomImage) {
        try {
          const digimonData = await getData();
          setImage(digimonData[0].img); // Selecciona la primera imagen aleatoria
        } catch (error) {
          console.error(
            "Error al obtener la imagen aleatoria de Digimon.",
            error
          );
        }
      }
    };

    fetchRandomImage();
  }, [useRandomImage]);

  const handleSubmit = (event) => {
    event.preventDefault();
    addCard({ title, description, img: image, useRandomImage });
    setTitle("");
    setDescription("");
    setImage("");
    setUseRandomImage(false);

    setScreen("Card");
  };

  const handleCheckboxChange = () => {
    setUseRandomImage(!useRandomImage);
    if (!useRandomImage) {
      setImage(""); // Limpiar la URL de la imagen si se selecciona usar imagen aleatoria
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h3>Agrega una Tarjeta Nueva</h3>
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
      <p>
        <em>o</em>
      </p>
      <Input
        placeholder="Usar imagen aleatoria de Digimon API"
        type="checkbox"
        checked={useRandomImage}
        onCheckChange={handleCheckboxChange}
      />
      <br />
      <Button text="Agregar Elemento" handleButton={handleSubmit} />
    </form>
  );
};

Form.propTypes = {
  setScreen: PropTypes.func.isRequired,
};

export default Form;
