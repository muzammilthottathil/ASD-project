import MapContainer from './Map'
import { Link } from 'react-router-dom'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'
import styles from '../styles/map.module.css'
import { useRef } from 'react'

export default function Modal({ modalStatus, setModalStatus }) {
    // var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')
    // const mapRef = useRef()

    // mapboxgl.accessToken =
    //     'pk.eyJ1IjoidGFxbmFyIiwiYSI6ImNrazFlcGU5ZzBxamYydnJ1YTYxamZwN2IifQ.sDx2oThjRPndaYQW8kX-eg'
    // var map = new mapboxgl.Map({
    //     container: mapRef.current,
    //     style: 'mapbox://styles/mapbox/streets-v11'
    // })

    return (
        <div className={modalStatus ? styles.modalMap : styles.modalMapClosed}>
            <span className={styles.span} onClick={() => setModalStatus(false)}>
                Close
            </span>
            <div className={styles.mapDiv}>
                <MapContainer />
            </div>
            <Link
                className="btn btn-primary w-100 p-3"
                style={{
                    borderRadius: '20px'
                }}
                to="/find-near"
            >
                SELECT
            </Link>
        </div>
    )
}
