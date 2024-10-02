import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardContext } from "../contexts/CardContext";
import Form from "../components/Form";
import { getData } from "../services/ApiService";

const FormPage = () => {
  const navigate = useNavigate();
  const { addCard } = useContext(CardContext);
  const [useRandomImage, setUseRandomImage] = useState(false);

  const handleAddItem = async (item) => {
    let img = item.image;

    if (useRandomImage) {
      try {
        const digimonData = await getData();
        img = digimonData[0].img; // Selecciona la primera imagen aleatoria
      } catch (error) {
        console.error(
          "Error al obtener la imagen aleatoria de Digimon.",
          error
        );
      }
    }

    addCard({ ...item, img });
    navigate("/cards");
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

export default FormPage;
