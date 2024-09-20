import PropTypes from "prop-types";
import CardItem from "../components/CardItem";

const CardList = ({ cards }) => {
  return (
    <div className="cardList">
      {cards.map((card, index) => (
        <CardItem
          key={index}
          img={card.img}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardList;
