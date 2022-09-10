import React from 'react';

const CountryItem = ({country}) => {

    if (!country) {
        return null
    }

    // console.log(country)

    return (
        <div>
        <h3>Name: {country.name.official}</h3>
        </div>
    )
}

export default CountryItem;