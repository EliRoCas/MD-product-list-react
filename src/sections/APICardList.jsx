import { useEffect, useState } from "react";

import CardList from "./CardList";
import { getData } from "../services/ApiService";

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

  return (
    <div>
      <CardList cards={cardData} />
    </div>
  );
};

export default APICardList;
