import React, { useState, useEffect } from 'react'
import map from './../data/map.json'
import { MapContainer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export const MyMap = () => {

    // useEffect(() => {
    //     console.log(map)
    // },[])

    return (
        <div>
            <h1>My Map</h1>
            <MapContainer style ={{ height: '60vh' }}></MapContainer>
        </div>
    )
}