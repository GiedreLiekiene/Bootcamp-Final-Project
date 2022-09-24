import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import './App.css';

import HomePage from "./pages/homePage/HomePage"; 
import RecipesPage from "./pages/recipesPage/RecipesPage";
import SubmitPage from "./pages/submitPage/SubmitPage";
import ContactUsPage from "./pages/contactUsPage/ContactUs";
import LogInPage from "./pages/logInPage/LogInPage";
import SignUpPage from "./pages/signUpPage/SignUpPage";
import SettingsPage from "./pages/settingsPage/Settings";
import TopChefsPage from "./pages/topChefsPage/TopChefsPage";
import DeleteLauris from "./pages/deleteLaurisPage/DeleteLauris";

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/topchefs" element={<TopChefsPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/submit" element={<SubmitPage />} />
          <Route path="/contacts" element={<ContactUsPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/deletelauris" element={<DeleteLauris/>} />
        </Routes>
      </div>    
      <Footer/>
    </Router>
    
  );
}

export default App;