import { createContext, useState, useEffect } from "react";

import PropTypes from "prop-types";
// import { getData } from "../services/ApiService";
import { getLocalData } from "../services/localService/localApiService";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getCardData = async () => {
      try {
        const combinedData = await getLocalData();
        setCards(() => [...combinedData]);
      } catch (error) {
        console.error("Error: ¡Upps! Algo salió mal.", error);
      }
    };

    getCardData();
  }, [setCards]);

  const addCard = (newCard) => {
    setCards((prevCards) => [newCard, ...prevCards]);
  };

  const clearCards = () => {
    setCards([]);
  };

  return (
    <CardContext.Provider value={{ cards, addCard, clearCards }}>
      {children}
    </CardContext.Provider>
  );
};

CardProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
