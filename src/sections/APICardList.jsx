import { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import CardList from "./CardList";

const APICardList = () => {
  const digimonURL = "https://digimon-api.vercel.app/api/digimon";
  const numberURL = "http://numbersapi.com/random/year?json";
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const digimonResponse = await fetch(digimonURL);
        const digimonData = await digimonResponse.json();
        // console.log(digimonData);
        const mixDigimonData = digimonData.sort(() => Math.random() - 0.5);
        const selectDigimonData = mixDigimonData.slice(0, 4);

        const numberResponse = await Promise.all([
          fetch(numberURL),
          fetch(numberURL),
          fetch(numberURL),
          fetch(numberURL),
        ]);
        const numberData = await Promise.all(
          numberResponse.map((response) => response.json())
        );
        // console.log(numberData);

        const combinedData = numberData.map((number, index) => ({
          img: selectDigimonData[index]?.img,
          title: number.number ? number.number.toString() : "Año no disponible",
          description: number.text,
        }));

        setCardData(combinedData);
      } catch (error) {
        console.error("Error: ¡Upps! Algo salió mal.", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <CardList cards={cardData} />
    </div>
  );
};

// APICardList.propTypes = {};

export default APICardList;

// Prueba de la API, usando sólo un fetch y una API de Digimon
//   useEffect(() => {
//     const fetchDigimon = async () => {
//       try {
//         const response = await fetch(digimonURL);
//         const data = await response.json();

//         const mixDigimonData = data.sort(() => Math.random() - 0.5);

//         const selectDigimonData = mixDigimonData.slice(0, 4);

//         setDigimon(selectDigimonData);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchDigimon();
//   }, []);

//   useEffect(() => {
//     const fetchNumber = async () => {
//       try {
//         const response = await fetch(numberURL);
//         const data = await response.json();
//         console.log(data);
//         setNumber(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchNumber();
//   }, []);
