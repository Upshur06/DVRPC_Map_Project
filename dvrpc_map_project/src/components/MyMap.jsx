import React, { useEffect} from 'react'
import { Map, GeoJSON } from 'react-leaflet'
import mapData from './../data/map.json'
import 'leaflet/dist/leaflet.css'
import './../css/MyMap.css'

export default function MyMap() {
        // const countryStyle = {
        //     fillColor: 'red'
        // }

        const onEachArea = (area, layer) =>{
            const area_IPD = `score: ${area.properties.ipd_score}`
            const area_D = `score: ${area.properties.d_score}`
            const area_EM = `score: ${area.properties.em_score}`
            const area_F = `score: ${area.properties.f_score}`
            const area_FB = `score: ${area.properties.fb_score}`
            const area_LEP = `score: ${area.properties.lep_score}`
            const area_LI = `score: ${area.properties.li_score}`
            const area_OA = `score: ${area.properties.oa_score}`
            const area_RM = `score: ${area.properties.rm_score}`
            const area_Y = `score: ${area.properties.y_score}`
            // console.log(`Property: ${area_IPD}, Display Name: Indicators of Potential Disadvantage
            // Property: ${area_D} Display Name: Indicators of Potential Disadvantage
            // Property: ${area_EM}, Display Name: Indicators of Potential Disadvantage
            // Property: ${area_F}, Display Name: Indicators of Potential Disadvantage
            // Property: ${area_FB}, Display Name: Indicators of Potential Disadvantage
            // Property: ${area_LEP}, Display Name: Indicators of Potential Disadvantage
            // Property: ${area_LI}, Display Name: Indicators of Potential Disadvantage
            // Property: ${area_OA}, Display Name: Indicators of Potential Disadvantage
            // Property: ${area_RM}, Display Name: Indicators of Potential Disadvantage
            // Property: ${area_Y}, Display Name: Indicators of Potential Disadvantage
            // `)
            layer.bindPopup(`Property: ${area_IPD}, Display Name: Indicators of Potential Disadvantage<br>
            Property: ${area_D} Display Name: Indicators of Potential Disadvantage<br>
            Property: ${area_EM}, Display Name: Indicators of Potential Disadvantage<br>
            Property: ${area_F}, Display Name: Indicators of Potential Disadvantage<br>
            Property: ${area_FB}, Display Name: Indicators of Potential Disadvantage<br>
            Property: ${area_LEP}, Display Name: Indicators of Potential Disadvantage<br>
            Property: ${area_LI}, Display Name: Indicators of Potential Disadvantage<br>
            Property: ${area_OA}, Display Name: Indicators of Potential Disadvantage<br>
            Property: ${area_RM}, Display Name: Indicators of Potential Disadvantage<br>
            Property: ${area_Y}, Display Name: Indicators of Potential Disadvantage
            `)


            
            layer.on({
                mouseover: (e) => {
                    e.target.setStyle({
                        color: '#5ec8f2'
                    })
                },
                mouseout: (e) => {
                    e.target.setStyle({
                        color: '#3388ff'
                    })
                }
            })
        }

        useEffect(() => {
            // console.log(mapData)
        },[])

        // onEachCountry = (country, layer) => {
        //     console.log(country)
        // }

  return (
    <div>
        <h1>My Map</h1>
             <div className='mapBorder'>
                 <Map style={{ height: '80vh', width: '90vw', border: '2px solid black' }} zoom={10} center={[40.05, -75.1]}>
                     <GeoJSON data={mapData.features} onEachFeature={onEachArea}  />
                 </Map>
            </div>
    </div>
  )
}
