import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import ContinentSelect from '../components/ContinentSelect';
import CountriesSelect from '../components/CountriesSelect';
import CountryItem from '../components/CountryItem';
import TravelledCountries from '../components/TravelledCountries';
import MapChart from '../components/AnotherMap';
import ReactTooltip from "react-tooltip";


const CountriesContainer = ({ continents }) => {

    const [countries, setCountries] = useState([]);
    const [favCountries, setFavCountries] = useState([])
    const [selectedCountryCCA3Code, setSelectedCountryCCA3Code] = useState('')
    const [content, setContent] = useState("")

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

    const handleSelectCountryFromMap = event => {
        setSelectedCountryCCA3Code(event.target.attributes.value.value)
    }

    const selectedCountry = countries.find(country => country.cca3 === selectedCountryCCA3Code)

    const handleTravelledToggle = (cca3) => {
        const countryToFav = countries.find(country => country.cca3 === cca3)
        const copyOfFavCountries = [...favCountries, countryToFav]
        setFavCountries(copyOfFavCountries)
    }

    const handleCountryRemove = (cca3) => {
        const newCopyOfFavCountries = favCountries.filter(country => country.cca3 !== cca3)
        setFavCountries(newCopyOfFavCountries)
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
        <TravelledCountries countries={favCountries} onCountryRemove={handleCountryRemove} setTooltipContent={setContent} content={content} handleSelectCountry={handleSelectCountry} handleSelectCountryFromMap={handleSelectCountryFromMap}/>
        <MapChart favCountries={favCountries} setTooltipContent={setContent} handleSelectCountryFromMap={handleSelectCountryFromMap}/>
        <ReactTooltip>{content}</ReactTooltip>
        </section>

    )
}

export default CountriesContainer;