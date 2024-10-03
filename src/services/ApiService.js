const digimonURL = "https://digimon-api.vercel.app/api/digimon";
const numberURL = "http://numbersapi.com/";

export const getDigimonImages = async () => {
  try {
    const digimonResponse = await fetch(digimonURL);
    const digimonData = await digimonResponse.json();
    const mixDigimonData = digimonData.sort(() => Math.random() - 0.5);
    return mixDigimonData.slice(0, 4).map((digimon) => ({
      img: digimon.img,
    }));
  } catch (error) {
    console.error(
      "Error: ¡Upps! Algo salió mal al obtener las imágenes.",
      error
    );
    throw error;
  }
};

export const getNumberData = async (randomNumbers) => {
  try {
    const numberData = await (await fetch(numberURL + randomNumbers)).json();
    return numberData;
  } catch (error) {
    console.error("Error: ¡Upps! Algo salió mal al obtener los datos.", error);
    throw error;
  }
};

export const getData = async () => {
  try {
    const digimonImages = await getDigimonImages();

    const randomNumbers = getRandomNumbers(4, 1, 100).join(",");
    const numberData = await getNumberData(randomNumbers);

    return digimonImages.map((digimon, index) => ({
      img: digimon.img,
      title: randomNumbers.split(",")[index],
      description: numberData[randomNumbers.split(",")[index]],
    }));
  } catch (error) {
    console.error("Error: ¡Upps! Algo salió mal.", error);
    throw error;
  }
};

function getRandomNumbers(count, min, max) {
  const randomNumbers = [];
  for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
}

// export const getData = async () => {
//   try {
//     const digimonResponse = await fetch(digimonURL);
//     const digimonData = await digimonResponse.json();
//     const mixDigimonData = digimonData.sort(() => Math.random() - 0.5);
//     const selectDigimonData = mixDigimonData.slice(0, 4);
//     const randomNumbers = getRandomNumbers(4, 1, 100).join(",");

//     const numberData = await (await fetch(numberURL + randomNumbers)).json();

//     return Object.entries(numberData).map((number, index) => ({
//       img: selectDigimonData[index]?.img,
//       title: number[0] ? number[0].toString() : "Número no disponible",
//       description: number[1],
//     }));
//   } catch (error) {
//     console.error("Error: ¡Upps! Algo salió mal.", error);
//     throw error;
//   }
// };
