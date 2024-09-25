import Layout from "./layout/Layout";
import CardListScreen from "./screens/CardListScreen";

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
