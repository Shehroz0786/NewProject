
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Homepage from "./Pages/Homepage";
import Start from "./Pages/Start";
import Loginpage from "./Pages/Loginpage";
import SignupPage from "./Pages/SingupPage";
import IslamabadPage from "./Pages/IslamabadPage";
import KarachiPage from "./Pages/KarachiPage";
import MultanPage from "./Pages/MultanPage";
import LahorePage from "./Pages/LahorePage";
import FaisalabadPage from "./Pages/FaisalabadPage";
import { Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Loginpage" element={<Loginpage />} />
        <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/IslamabadPage" element={<IslamabadPage />} />
        <Route path="/LahorePage" element={<LahorePage />} />
        <Route path="/MultanPage" element={<MultanPage />} />
        <Route path="/FaisalabadPage" element={<FaisalabadPage />} />
        <Route path="/KarachiPage" element={<KarachiPage />} />
      </Routes>
    </div>
  );
}

export default App;
