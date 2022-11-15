import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    fetch("https://pf-ecommerce.onrender.com/api/categories")
    fetch("https://app-food-henry.onrender.com/diet")
    
  },[])

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
