import React, { useEffect} from 'react'
import { Map, GeoJSON } from 'react-leaflet'
import mapData from './../data/map.json'
import 'leaflet/dist/leaflet.css'
import './../css/MyMap.css'

export default function MyMap() {
        useEffect(() => {
            console.log(mapData)
        },[])
  return (
    <div>
        <h1>My Map</h1>
             <div className='mapBorder'>
                 <Map style={{ height: '80vh', width: '90vw', border: '2px solid black' }} zoom={10} center={[40.05, -75.1]}>
                     <GeoJSON data={mapData.features} />
                 </Map>
            </div>
    </div>
  )
}
