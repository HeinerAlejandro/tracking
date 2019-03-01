import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { renderToStaticMarkup } from 'react-dom/server'
import { divIcon } from 'leaflet'
import { 
    faMapMarker,
    faTabletAlt
} from '@fortawesome/free-solid-svg-icons'

import RandomColor from 'randomcolor'

library.add(faMapMarker)
library.add(faTabletAlt)

const stylesCenter = { 
    position: 'absolute',
    left : '1px',
    bottom : '250%'
}

const styleMarker = {
    position : 'absolute',
    bottom : '100%',
    left : '-7px'
}

const colorMarker = RandomColor()

const IconMarker = (
    <div>
        <FontAwesomeIcon
            icon = { faMapMarker }
            color = { colorMarker }
            size = '3x'
            style = { styleMarker }
        />
           <FontAwesomeIcon
            icon = { faTabletAlt }
            color = 'white'
            size = '1x'
            style = { stylesCenter }
        />
     
    </div>
)

const iconMarkup = renderToStaticMarkup(IconMarker)
const optionRender = divIcon({
    html: iconMarkup,
})

export default optionRender