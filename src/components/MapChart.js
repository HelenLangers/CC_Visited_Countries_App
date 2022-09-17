import React from "react"
import { ZoomableGroup, ComposableMap, Geographies, Geography } from "react-simple-maps"

const MapChart = ({ setTooltipContent, selectedCountry, favCountries, handleSelectCountryFromMap }) => {

    if (!selectedCountry) {
        return ("Please Select a Country")
    }

    return (
        <div data-tip="">
         <ComposableMap projection="geoMercator" projectionConfig={{scale:110}}>
         <ZoomableGroup>
        <Geographies geography="/features.json">
            {({ geographies }) =>
                geographies.map((geo) => {
                const ids = favCountries.find((country) => country.cca3 === geo.id)
                return (
                 <Geography
                    value={geo.id}
                    key={geo.id}
                    geography={geo}
                    fill={ids ? '#55b8d9' : '#fff'} 
                    onMouseEnter={() => {setTooltipContent(`${geo.properties.name}`);}}
                    onMouseLeave={() => {setTooltipContent("");}}
                    onClick={handleSelectCountryFromMap}
                    style={{hover: {
                            fill: "#000000",
                            outline: "none"}
                            }}/>
                )
            })}
        </Geographies>
            {/* <Marker key={selectedCountry.name.common} coordinates={selectedCountry.capitalInfo.latlng}>
            <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)">
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y="15"
            style={{fill:"#5D5A6D"}}>{selectedCountry.capital}</text>
            </Marker> */}
        </ZoomableGroup>
        </ComposableMap>
        </div>
    );
    }

export default MapChart;
