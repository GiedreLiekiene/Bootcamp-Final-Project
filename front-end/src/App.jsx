import CategoriesList from "./components/categories/CategoriesList";
import HeroSection from "./components/mainpage/HeroSection";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Settings from "./pages/settingsPage/Settings";
import './App.css';

function App() {
  return (
    <>
    
    <div className="App">
      <Navbar/>
      <div className="container main">
        <Settings/>
      </div>
      <Footer/>
    </div>
    
    </>
    
  );
}

export default App;
