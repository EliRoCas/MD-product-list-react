import { createContext, useState } from "react";
import { useEffect } from "react";

import PropTypes from "prop-types";
import { getData } from "../services/ApiService";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getCardData = async () => {
      try {
        const combinedData = await getData();
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

  return (
    <CardContext.Provider value={{ cards, addCard }}>
      {children}
    </CardContext.Provider>
  );
};

CardProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
