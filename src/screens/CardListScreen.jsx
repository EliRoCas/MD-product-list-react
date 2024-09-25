import { useState } from "react";

import APICardList from "../sections/APICardList";
import CardList from "../sections/CardList";

const CardListScreen = () => {
  const [cards, setCards] = useState([]);
  return (
    <div>
      {cards.length === 0 ? (
        <APICardList cards={cards} setCards={setCards} />
      ) : (
        <CardList cards={cards} />
      )}
    </div>
  );
};

export default CardListScreen;
