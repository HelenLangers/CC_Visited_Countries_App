import './App.css';
import React from 'react';
import CountriesContainer from './containers/CountriesContainer';

function App() {
  const Continents = [
    {name: "Africa", url: "https://restcountries.com/v3.1/region/africa"},
    {name: "America", url: "https://restcountries.com/v3.1/region/americas"},
    {name: "Asia", url:"https://restcountries.com/v3.1/region/asia"},
    {name: "Europe", url: "https://restcountries.com/v3.1/region/europe"},
    {name: "Oceania", url:"https://restcountries.com/v3.1/region/oceania"}
  ]

  return (
    <CountriesContainer genres={genres} />
  )

export default App;
