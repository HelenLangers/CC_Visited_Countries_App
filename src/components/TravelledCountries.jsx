import React from "react";
import MapChart from '../components/AnotherMap';
import ReactTooltip from "react-tooltip";


const TravelledCountries =({ countries, onCountryRemove, setTooltipContent, content}) => {
    
    const handleSelectCountry = (event) => {
        onCountryRemove(event.target.value)
    }

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
            <div className="travelled-block">
                {countries.map(country => {
                    return (
                        <div className="added-country" key={country.cca3}>
                        <p>{country.name.common}
                        
                        <button className="button" onClick={handleSelectCountry} value={country.cca3}>Remove</button>
                        </p>
                        </div>
                    )
                })}
            </div>
            {changeParagraph()}
        </div>
        <div>
        <MapChart countries={countries} setTooltipContent={setTooltipContent} />
        <ReactTooltip>{content}</ReactTooltip>
        </div>
        </section>
    )
}

export default TravelledCountries;