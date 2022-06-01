// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import PlantsPage from "./pages/PlantsPage/PlantsPage";
import AddPlantsPage from "./pages/AddPlantsPage/AddPlantsPage"
import SpringPlantsPage from "./pages/SpringPlantsPage/SpringPlantsPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/all" element={<PlantsPage />}/>
        <Route path="/addplants/:plantId/" element={
        <PrivateRoute>
          <AddPlantsPage />
        </PrivateRoute>}/>
        <Route path="/spring" element={<PrivateRoute><SpringPlantsPage /></PrivateRoute>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
