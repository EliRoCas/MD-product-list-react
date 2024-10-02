import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CardProvider } from "./contexts/CardContext";

import Layout from "./layout/Layout";

import FormScreen from "./screens/FormScreen";
import CardListScreen from "./screens/CardListScreen";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <CardProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/cards" element={<CardListScreen />} />
            <Route path="/form" element={<FormScreen />} />
          </Routes>
        </Layout>
      </CardProvider>
    </BrowserRouter>
  );
}

export default App;
