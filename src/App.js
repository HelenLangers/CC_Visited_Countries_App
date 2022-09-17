// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import About from './components/About';
import CountriesContainer from './containers/CountriesContainer';

function App() {
  const continents = [
    {name: "Africa", url: "https://restcountries.com/v3.1/region/africa"},
    {name: "America", url: "https://restcountries.com/v3.1/region/americas"},
    {name: "Asia", url:"https://restcountries.com/v3.1/region/asia"},
    {name: "Europe", url: "https://restcountries.com/v3.1/region/europe"},
    {name: "Oceania", url:"https://restcountries.com/v3.1/region/oceania"},
    {name: "Whole World", url: "https://restcountries.com/v3.1/all"}
  ]

  return (
    <Router>
    <section className="main-section">
    <NavBar />
    <Routes>
      <Route path="/" element={<CountriesContainer continents={continents} />} />
      <Route path="/about/" element={<About />} />
      </Routes>
    </section>
    </Router>
  )
}

export default App;
