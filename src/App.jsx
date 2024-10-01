import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Layout from "./layout/Layout";

import FormScreen from "./screens/FormScreen";
import CardListScreen from "./screens/CardListScreen";
import HomeScreen from "./screens/HomeScreen"


function App() {
  const [cards, setCards] = useState([]);

  const addItem = (item) => {
    setCards((prevCards) => [item, ...prevCards]);
  };

  return (
    <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/cards" element={< CardListScreen cards={cards} setCards={setCards} />} />
            <Route path="/form" element={< FormScreen addItem={addItem}/>} />
          </Routes>
        </Layout>
    </BrowserRouter>

  );
}

export default App;
