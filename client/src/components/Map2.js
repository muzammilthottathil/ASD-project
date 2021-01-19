import { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'

export default function MapContainer2() {
    const [viewport, setViewport] = useState({
        latitude: 10.8505159,
        longitude: 76.2710833,
        zoom: 10,
        width: '1245px',
        height: '756px'
    })
    return (
        <div>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={
                    'pk.eyJ1IjoidGFxbmFyIiwiYSI6ImNrazFlcGU5ZzBxamYydnJ1YTYxamZwN2IifQ.sDx2oThjRPndaYQW8kX-eg'
                }
                onViewportChange={(viewport) => {
                    setViewport(viewport)
                }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                // controller={new }
            >
                <Marker
                    latitude={10.672035360944514}
                    longitude={76.07585121871418}
                ></Marker>
            </ReactMapGL>
        </div>
    )
}
