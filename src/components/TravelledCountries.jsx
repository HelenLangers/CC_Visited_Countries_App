
const TravelledCountries =({ countries }) => {
    
    const travelledCountries = countries.filter(country => country.isTravelled)
    
    return (
        <div>
            <h3>Countries I've Travelled To:</h3>
            <ul>
                {travelledCountries.map(country => {
                    return (
                        <li key={country.cca3}>{country.name.common}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TravelledCountries;