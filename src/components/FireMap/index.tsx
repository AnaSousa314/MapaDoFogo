
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
      const {data} = response
      setBurned(data);
    })
  },[]);

  return(
    <>
      <div className="page-map">
        <div id="page-map-content">
        
          
            <MapContainer 
              center={[-6.0444359, -49.8854597]}
              zoom={12.5}
              className="map-container"
            >
              <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

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