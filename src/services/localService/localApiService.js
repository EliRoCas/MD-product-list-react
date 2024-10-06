const digimonURL = "https://digimon-api.vercel.app/api/digimon";
const numberURL = "/numbers.json?";
// Fetch Digimon images
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

export const getLocalNumberData = async (randomNumbers) => {
  try {
    const numberData = await (await fetch(numberURL + randomNumbers)).json();
    return numberData;
  } catch (error) {
    console.error("Error: ¡Upps! Algo salió mal al obtener los datos.", error);
    throw error;
  }
};

export const getLocalData = async () => {
  try {
    const digimonImages = await getDigimonImages();

    const randomNumbers = getRandomNumbers(4, 1, 50);
    const numberData = await getLocalNumberData(randomNumbers.join(","));

    const filteredNumbers = filterNumbersByRandom(numberData, randomNumbers);

    return Object.entries(filteredNumbers).map((number, index) => ({
      img: digimonImages[index]?.img,
      title: number[0] ? number[0].toString() : "Número no disponible",
      description: number[1],
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

export const filterNumbersByRandom = (numberData, randomNumbers) => {
  const filteredNumbers = {};
  randomNumbers.forEach((num) => {
    if (numberData[num]) {
      filteredNumbers[num] = numberData[num];
    }
  });
  return filteredNumbers;
};
