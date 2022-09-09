import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import ContinentSelect from '../components/ContinentSelect';
import CountriesSelect from '../components/CountriesSelect';

const CountriesContainer = ({ continents }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        loadCountries(continents[0].url)
    }, [continents])

    const loadCountries = url => {
        fetch(url)
        .then(res => res.json())
        .then(countriesList => setCountries(countriesList));
    }

    const handleSelectChange = event => {
        loadCountries(event.target.value);
    }

    return (
        <>
        <Header />
        <ContinentSelect continents={continents} handleSelectChange={handleSelectChange}/>
        <CountriesSelect countries={countries} handleSelectChange={handleSelectChange}/>
        <hr></hr>
        </>
    )
}

export default CountriesContainer;