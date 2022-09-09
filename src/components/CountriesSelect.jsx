import React from 'react';

const CountriesSelect = ({countries, handleSelectChange}) => {

    return (
        <div>
            <h2>Select a Country:</h2>
            <select defaultValue ="" onChange={handleSelectChange}>
                <option value = "" disabled>Which Country?</option>
                {countries.map(country => {
                    return <option key={country.cca3} value={country.name.common}>{country.name.common}</option>
                })}
            </select>
        </div>
    )
}

export default CountriesSelect;