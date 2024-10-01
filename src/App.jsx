import { BrowserRouter, Routes, Route} from "react-router-dom";

import Layout from "./layout/Layout";

import FormScreen from "./screens/FormScreen";
import CardListScreen from "./screens/CardListScreen";
import HomeScreen from "./screens/HomeScreen"

function App() {
  return (
    <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/cards" element={< CardListScreen/>} />
            <Route path="/form" element={< FormScreen/>} />
          </Routes>
        </Layout>
    </BrowserRouter>

  );
}

export default App;
