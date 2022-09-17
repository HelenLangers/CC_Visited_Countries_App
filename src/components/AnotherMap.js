import React from "react"
import { ZoomableGroup, ComposableMap, Geographies, Geography } from "react-simple-maps"

const MapChart = ({ setTooltipContent, countries }) => {


    return (
        <div data-tip="">
         <ComposableMap projection="geoMercator" projectionConfig={{scale:110}}>
         <ZoomableGroup>
        <Geographies geography="/features.json">
            {({ geographies }) =>
                geographies.map((geo, index) => {
                const ids = countries.find((s) => s.cca3 === geo.id)
                return (
                 <Geography
                    key={index}
                    geography={geo}
                    fill={ids ? '#55b8d9' : '#fff'} 
                    onMouseEnter={() => {setTooltipContent(`${geo.properties.name}`);}}
                    onMouseLeave={() => {setTooltipContent("");}}
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
