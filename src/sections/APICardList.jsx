import { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import CardList from "./CardList";

function getRandomNumbers(count, min, max) {
  const randomNumbers = [];
  for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
}

const APICardList = () => {
  const digimonURL = "https://digimon-api.vercel.app/api/digimon";
  const numberURL = "http://numbersapi.com/";
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const digimonResponse = await fetch(digimonURL);
        const digimonData = await digimonResponse.json();
        const mixDigimonData = digimonData.sort(() => Math.random() - 0.5);
        const selectDigimonData = mixDigimonData.slice(0, 4);
        const randomNumbers = getRandomNumbers(4, 1, 100).join(",");

        const numberData = await (
          await fetch(numberURL + randomNumbers)
        ).json();

        const combinedData = Object.entries(numberData).map(
          (number, index) => ({
            img: selectDigimonData[index]?.img,
            title: number[0] ? number[0].toString() : "Número no disponible",
            description: number[1],
          })
        );

        setCardData(combinedData);
      } catch (error) {
        console.error("Error: ¡Upps! Algo salió mal.", error);
      }
    };

        fetchData();
        console.log("fetchData");
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
