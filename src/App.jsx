

import { BrowserRouter} from "react-router-dom";

import { useState } from "react";

import { CardProvider } from "./contexts/CardContext";

import Layout from "./layout/Layout";

import HomeScreen from "./screens/HomeScreen";
import FormScreen from "./screens/FormScreen";
import CardListScreen from "./screens/CardListScreen";

function App() {
  const [screen, setScreen] = useState("Home");
  let screenRoute = <HomeScreen setScreen={setScreen} />;

  if (screen === "Card") {
    screenRoute = <CardListScreen setScreen={setScreen} />
  }

  if (screen === "Form") {
    screenRoute = <FormScreen setScreen={setScreen} />
  }

  return (
    <BrowserRouter>
      <CardProvider>
        <Layout setScreen={setScreen}>
          {screenRoute}
        </Layout>
      </CardProvider>
    </BrowserRouter>
  );
}

export default App;
