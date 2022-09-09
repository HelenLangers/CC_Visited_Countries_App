import React, {useEffect, useState} from 'react';
import Header from '../components/Header';

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

    return (
        <Header countries={countries}/>
    )
}

export default CountriesContainer;