import React from 'react'
import { Map, GeoJSON } from 'react-leaflet'
import mapData from './../data/map.json'
import 'leaflet/dist/leaflet.css'
import './../css/MyMap.css'

export default function MyMap() {

    const colors = ['#2477A3', '#77B2D1', '#214C63', '#22A0E2', '#1199E0', '#033550', '#02537D', '#02537D',         
                    '#DFF2FD', '#DFF2FD', '#66A8CB', '#56A4CC', '#3393C6', '#3D87AD', '#BFD2DD', '#092C3F', '#ECEFF0', '#0B6EA1', '#0B6EA1', '#3589B5', '#567585', '#567585', '#78B7D8', '#4C7285', '#88959C', '#5297BB', '#62B1DA', '#0F89C9', '#17658E', '#5190B0','#4A5A62', '#0173AF', '#ACBAC1', '#81C5E9', '#2175B5', '#0A4D80', '#1997F8']

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

            const colorIndex = Math.floor(Math.random() * colors.length)
            layer.options.fillColor = colors[colorIndex];

            const onTargetMouseOver = (e) => {
                e.target.setStyle({
                    color: '#5ec8f2'
                })
            }

            const offTargetMouseOut = (e) => {
                e.target.setStyle({
                    color: '#3388ff'
                })
            }
            
            layer.on({
                mouseover: onTargetMouseOver,
                mouseout: offTargetMouseOut
            })
        }

  return (
    <div>
             <div className='mapBorder'>
                 <Map style={{ height: '80vh', width: '90vw', border: '3px solid black' }} zoom={10} center={[40.05, -75.1]}>
                     <GeoJSON data={mapData.features} onEachFeature={onEachArea}  />
                 </Map>
            </div>
    </div>
  )
}
