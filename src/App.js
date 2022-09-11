// import './App.css';
import React from 'react';
import CountriesContainer from './containers/CountriesContainer';

function App() {
  const continents = [
    {name: "Africa", url: "https://restcountries.com/v3.1/region/africa"},
    {name: "America", url: "https://restcountries.com/v3.1/region/americas"},
    {name: "Asia", url:"https://restcountries.com/v3.1/region/asia"},
    {name: "Europe", url: "https://restcountries.com/v3.1/region/europe"},
    {name: "Oceania", url:"https://restcountries.com/v3.1/region/oceania"}
  ]

  return (
    <section className="main-section">
      <CountriesContainer continents={continents} />
    </section>
  )
}

export default App;
