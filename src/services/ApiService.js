const digimonURL = "https://digimon-api.vercel.app/api/digimon";
const numberURL = "http://numbersapi.com/";

export const getData = async () => {
  try {
    const digimonResponse = await fetch(digimonURL);
    const digimonData = await digimonResponse.json();
    const mixDigimonData = digimonData.sort(() => Math.random() - 0.5);
    const selectDigimonData = mixDigimonData.slice(0, 4);
    const randomNumbers = getRandomNumbers(4, 1, 100).join(",");

    const numberData = await (await fetch(numberURL + randomNumbers)).json();

    return Object.entries(numberData).map((number, index) => ({
      img: selectDigimonData[index]?.img,
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
