
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import mapIcon from '../../utils/mapIcon'

import 'leaflet/dist/leaflet.css'
import './style.css'



import api from '../../services/api'
import { useEffect } from "react";
import { useState } from "react";
import MiniMap from "../Minimap";

interface Burn{
  created: string,
  coordenada: {
    latitude: number,
    longitude: number
  }
  
}

export default function FireMap(){
  const [burned, setBurned] = useState<Burn[]>([]);
  
  console.log(burned);
  

  useEffect(()=>{
    api.get("/").then((response)=>{
      // console.log(response);
      const {data} = response

      // const {cordenada}= data
      // console.log(cordenada);
      setBurned(data);
      // console.log(data);

      
    })
  },[]);

  return(
    <>
      <div className="page-map">
        <div id="page-map-content">
        
          
            <MapContainer 
              center={[-6.0444359, -49.8854597]}
              zoom={12.5}
              // style={{width:"90%",height:"80%"}}
              className="map-container"
              // scrollWheelZoom={false}
            >
              <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {/* <TileLayer 
            url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          /> */}

              {burned.map((burn,index)=>{
                console.log(burn);
                return(
                  <Marker 
                    key={index}
                    icon={mapIcon}
                    position={[burn.coordenada.latitude,burn.coordenada.longitude]}
                  >

                
                  </Marker>
                )
              })}

              <MiniMap/>

            </MapContainer>
          
        </div> 
      </div>
    </>
  )
}