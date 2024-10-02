import { useState } from "react";
import Layout from "./layout/Layout";
import CardListScreen from "./screens/CardListScreen";
import HomeScreen from "./screens/HomeScreen";
import FormScreen from "./screens/FormScreen";


// import APICardList from "./sections/APICardList";
// import CardList from "./sections/CardList";

// const cardData = [
//   {
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrIaOoNLKb_PGfc_nS4s3IVBC8x7x9nYOqQ&s",
//     title: "Test Title 1",
//     description: "Test Description 1",
//   },
//   {
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrIaOoNLKb_PGfc_nS4s3IVBC8x7x9nYOqQ&s",
//     title: "Test Title 2",
//     description: "Test Description 2",
//   },
//   {
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrIaOoNLKb_PGfc_nS4s3IVBC8x7x9nYOqQ&s",
//     title: "Test Title 3",
//     description: "Test Description 3",
//   },
//   {
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrIaOoNLKb_PGfc_nS4s3IVBC8x7x9nYOqQ&s",
//     title: "Test Title 4",
//     description: "Test Description 4",
//   },
// ];

function App() {
  const [screen, setScreen] = useState("Home")

  if (screen === "Home") {
    return (
      <Layout setScreen={setScreen}> 
        <HomeScreen setScreen={setScreen} />
      </Layout>
    );
  }

  if (screen === "Card") {
    return (
      <Layout setScreen={setScreen}>  
        <CardListScreen setScreen={setScreen} />
      </Layout>
    );
  }

  if (screen === "Form") {
    return (
      <Layout setScreen={setScreen}>  
        <FormScreen setScreen={setScreen} />
      </Layout>
    );
  }

  return (
    <>
      <Layout>
        {/* <CardList cards={cardData} /> */}
        {/* <APICardList /> */}
        <CardListScreen />
      </Layout>
    </>
  );
}

export default App;
