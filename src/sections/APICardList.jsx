import { useEffect, useState } from "react";

import { getData } from "../services/ApiService";
import CardList from "./CardList";
import Button from "../elements/Button";

const APICardList = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const getCardData = async () => {
      try {
        const combinedData = await getData();
        setCardData(combinedData);
      } catch (error) {
        console.error("Error: ¡Upps! Algo salió mal.", error);
      }
    };

    getCardData();
    console.log("getCardData");
  }, []);

  const addCards = async () => {
    try {
      const newCards = await getData();
      setCardData((prevData) => [...prevData, ...newCards]);
    } catch {
      console.error("Error: ¡Upps! Algo salió mal.");
    }
  };

  const deleteCard = () => {
    setCardData([]);
  };

  function updateCard() {
    deleteCard();
    addCards();
  }

  return (
    <div>
      <CardList cards={cardData} />

      <section className="apiButtons">
        <Button handleButton={updateCard} text={"Actualizar"} />
        <Button handleButton={addCards} text={"Ver más"} />
        <Button handleButton={deleteCard} text={"Eliminar"} />
      </section>
    </div>
  );
};

export default APICardList;
