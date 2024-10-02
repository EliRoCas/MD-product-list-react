import { useContext } from "react";
import { CardContext } from "../contexts/CardContext";
import { getData } from "../services/ApiService";
import CardList from "./CardList";
import Button from "../elements/Button";

const APICardList = () => {
  const { cards, addCard, clearCards } = useContext(CardContext);

  const addCards = async () => {
    try {
      const newCards = await getData();
      newCards.forEach((c) => addCard(c));
    } catch (error) {
      console.error("Error: ¡Upps! Algo salió mal.", error);
    }
  };

  const updateCard = () => {
    clearCards();
    addCards();
  };

  return (
    <div>
      <CardList cards={cards} />

      <section className="apiButtons">
        <Button handleButton={updateCard} text={"Limpiar y Obtener"} />
        <Button handleButton={addCards} text={"Ver más"} />
        <Button handleButton={clearCards} text={"Limpiar"} />
      </section>
    </div>
  );
};

export default APICardList;
