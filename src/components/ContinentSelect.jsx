import React from 'react';

const ContinentSelect = ({continents, handleSelectContinent}) => {

    return (
        <div>
            <h2>Select a Continent:</h2>
            <select defaultValue="" onChange={handleSelectContinent}>
            <option value = "" disabled>Where Have You Been?</option>
                {continents.map(continent => {
                    return <option key={continent.name} value={continent.url}>{continent.name}</option>
                })}
            </select>
        </div>
    );
};

export default ContinentSelect;