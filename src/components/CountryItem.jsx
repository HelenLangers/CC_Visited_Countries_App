import React from 'react';

const CountryItem = ({country, onTravelledToggle}) => {

    if (!country) {
        return null
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
            <p></p>
        </article>
    )
}

export default CountryItem;