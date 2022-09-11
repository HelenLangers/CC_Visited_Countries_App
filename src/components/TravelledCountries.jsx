
const TravelledCountries =({ countries, handleSelectCountry }) => {
    
    const travelledCountries = countries.filter(country => country.isTravelled)
    
    return (
        <div>
        <hr></hr>
            <h3>Countries I've Travelled To:</h3>
            <ul className="travelled-list">
                {travelledCountries.map(country => {
                    return (
                        <li key={country.cca3}>
                            <button onClick={() => handleSelectCountry(country.cca3)}>{country.name.common}
                            </button>
                        </li>
                    )
                })}
            </ul>
            <p>You've been to {travelledCountries.length} countries</p>
        </div>
    )
}

export default TravelledCountries;