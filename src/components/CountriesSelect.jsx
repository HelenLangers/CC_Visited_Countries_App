import React from 'react';

const CountriesSelect = ({countries, handleSelectCountry}) => {

    return (
        <div className="country-select">
            <h2>Select a Country:</h2>
            <select defaultValue ="" onChange={handleSelectCountry}>
                <option value = "" disabled>Which Country?</option>
                {countries.map(country => {
                    return <option key={country.cca3} value={country.cca3}>{country.name.common}</option>
                })}
            </select>
        </div>
    )
}

export default CountriesSelect;