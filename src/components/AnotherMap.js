import React from "react"
import { ZoomableGroup, ComposableMap, Geographies, Geography } from "react-simple-maps"

const MapChart = ({ setTooltipContent, favCountries, handleSelectCountryFromMap }) => {

    return (
        <div data-tip="">
         <ComposableMap projection="geoMercator" projectionConfig={{scale:110}}>
         <ZoomableGroup>
        <Geographies geography="/features.json">
            {({ geographies }) =>
                geographies.map((geo) => {
                const ids = favCountries.find((s) => s.cca3 === geo.id)
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
        </ZoomableGroup>
        </ComposableMap>
        </div>
    );
    }

export default MapChart;
