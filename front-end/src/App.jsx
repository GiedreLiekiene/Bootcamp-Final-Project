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
import ContactUsPage from "./pages/contactUsPage/ContactUs";
import SettingsPage from "./pages/settingsPage/Settings";

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/contactus" element={<ContactUsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
    
  );
}

export default App;