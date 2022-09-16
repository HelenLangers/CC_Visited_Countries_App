

const TravelledCountries =({ countries }) => {
    
    const changeParagraph = () => {
        if(countries.length === 1 ) {
            return(
                <p>You have been to {countries.length} country</p>
            );}
        else {
            return (
                <p>You've been to {countries.length} countries</p>
            )
        }
    }
        
    
    return (
        <section>
        <div>
        <hr></hr>
            <h3>Countries I've Travelled To:</h3>
            <ul className="travelled-list">
                {countries.map(country => {
                    return (
                        <li>{country.name.common}
                        </li>
                    )
                })}
            </ul>
            {changeParagraph()}
        </div>
        </section>
    )
}

export default TravelledCountries;