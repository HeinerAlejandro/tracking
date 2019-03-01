import React from 'react'
import { Map, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import IconMarker from './IconMarker'

import 'leaflet/dist/leaflet.css'



const MapDevices = ({ positions }) => {
    
    let last_index = null
    let position = null

    if (Array.isArray(positions)){
        last_index = positions.length - 1
        position = positions[last_index]
    }else
        position = positions

    const coordenate = [position.lat, position.lon]
    
    return(
        <Map
            className = 'map element-operation'
            center = { coordenate }
            zoom = { 13 }>

            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker 
                icon = { IconMarker }
                position = { coordenate }>
                 <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
            </Marker>

            <Polyline
                positions = {positions}
                color = '#F9B451'
            />
        </Map>
    )
}

export default MapDevices