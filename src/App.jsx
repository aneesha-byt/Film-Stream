import Layout from "./Components/Layout";
import Favorites from "./Pages/Favorites";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Movieinfo from "./Pages/Movieinfo";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Film-Stream" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movie/:id" element={<Movieinfo />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
