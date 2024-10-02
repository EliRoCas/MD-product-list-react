
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";

import { CardProvider } from "./contexts/CardContext";

import Layout from "./layout/Layout";

import HomeScreen from "./screens/HomeScreen";
import FormScreen from "./screens/FormScreen";
import CardListScreen from "./screens/CardListScreen";


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
