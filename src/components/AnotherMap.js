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


    {/* <Geography key={geo.rsmKey} geography={geo} 
    onMouseEnter={() => {setTooltipContent(`${geo.properties.name}`);}}
    onMouseLeave={() => {setTooltipContent("");}}
                                    
    style={{
            default: {
                fill: "#D6D6DA",
                outline: "none"
            },
            hover: {
                fill: "#F53",
                outline: "none"
            },
            pressed: {
                fill: "#E42",
                outline: "none"
            },
            isFav: {
                fill:"#F53",
                outline: "none"
            }
        }}
                                /> */}