import CategoriesList from "./components/categories/CategoriesList";
import HeroSection from "./components/mainpage/HeroSection";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
    
    <div className="App">
      <Navbar/>
      <div className="container main">
        <HeroSection />
        <CategoriesList />
      </div>
    </div></>
    
  );
}

export default App;
