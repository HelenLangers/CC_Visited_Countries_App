import React from 'react';

const CountryItem = ({country}) => {

    if (!country) {
        return null
    }

    // console.log(country)

    return (
        <article class="country-block">
            <h3>{country.name.common}</h3>
            <img src={country.flags.png} alt={`Flag of ${country.name.official}`}></img>
            <p></p>
        </article>
    )
}

export default CountryItem;