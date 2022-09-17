import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
// import { useMap } from 'react-leaflet/hooks'
import { Marker } from 'react-leaflet/Marker'
import { Popup} from 'react-leaflet/Popup'

const Mapping = ({country}) => {

    
    return (
      <MapContainer style={{height: "250px", width: "500px"}} center={country.capitalInfo.latlng} zoom={5} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={country.capitalInfo.latlng}>
      <Popup>
        The capital of {country.name.common} <br /> is {country.capital}.
      </Popup>
    </Marker>
  </MapContainer>
    );
  }
  
  export default Mapping;
