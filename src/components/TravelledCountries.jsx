

const TravelledCountries =({ countries }) => {
    
    const travelledCountries = countries.filter(country => country.isTravelled)
    
    return (
        <section>
        <div>
        <hr></hr>
            <h3>Countries I've Travelled To:</h3>
            <ul className="travelled-list">
                {travelledCountries.map(country => {
                    return (
                        <li>{country.name.common}
                        </li>
                    )
                })}
            </ul>
            <p>You've been to {travelledCountries.length} countries</p>
        </div>
        </section>
    )
}

export default TravelledCountries;