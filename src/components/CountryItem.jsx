import React from 'react';
import Mapping from './Mapping';

const CountryItem = ({country, onTravelledToggle}) => {

    if (!country) {
        return ("Please Select a Country")
    }

    const buttonClick = () => {
        onTravelledToggle(country.cca3)
    }

    return (
        <article className="country-block">
            <div className="country-info">
                <h3>{country.name.common}</h3>
                <p>Capital: {country.capital}</p>
                <p>Population: {country.population}</p>
                <button className="button" onClick={buttonClick}>I've Been Here!</button>
            </div>
            <div className="flag">
                <img src={country.flags.png} alt={`Flag of ${country.name.official}`}></img>
            </div>
            <div className="break"></div>
            <div className="map">
            <Mapping country={country}/>
            </div>
        </article>
    )
}

export default CountryItem;