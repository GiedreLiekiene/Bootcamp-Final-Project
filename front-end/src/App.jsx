import CategoriesList from "./components/categories/CategoriesList";
import HeroSection from "./components/mainpage/HeroSection";

function App() {
  return (
    <div className="App">
      <div className="container main">
        <HeroSection />
        <CategoriesList />
        </div>
    </div>
  );
}

export default App;
