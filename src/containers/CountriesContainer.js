import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import ContinentSelect from '../components/ContinentSelect';
import CountriesSelect from '../components/CountriesSelect';
import CountryItem from '../components/CountryItem';
import TravelledCountries from '../components/TravelledCountries';

const CountriesContainer = ({ continents }) => {
    const [countries, setCountries] = useState([]);
    const [selectedCountryCCA3Code, setSelectedCountryCCA3Code] = useState('')

    useEffect(() => {
        loadCountries(continents[0].url)
    }, [continents])

    const loadCountries = url => {
        fetch(url)
        .then(res => res.json())
        .then(countriesList => setCountries(countriesList))
        .catch(err => console.error);
    }

    const handleSelectContinent = event => {
        loadCountries(event.target.value);
    }

    const handleSelectCountry = event => {
        setSelectedCountryCCA3Code(event.target.value)
    }

    const selectedCountry = countries.find(country => country.cca3 === selectedCountryCCA3Code)

    const handleTravelledToggle = (cca3) => {
        const updatedCountries = countries.map((country) => {
            return country.cca3 === cca3
            ? {...country, isTravelled: !country.isTravelled}
            : country
        })
        setCountries(updatedCountries)
    }


    return (
        <section>
        <Header />
            <section className="options">
            <ContinentSelect continents={continents} handleSelectContinent={handleSelectContinent}/>
            <CountriesSelect countries={countries} handleSelectCountry={handleSelectCountry}/>
            </section>
        <hr></hr>
        <CountryItem country={selectedCountry} onTravelledToggle={handleTravelledToggle}/>
        <TravelledCountries countries={countries} />
        </section>
    )
}

export default CountriesContainer;