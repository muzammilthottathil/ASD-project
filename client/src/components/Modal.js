import MapContainer from './Map'
import { Link } from 'react-router-dom'
import styles from '../styles/map.module.css'

export default function Modal({ modalStatus, setModalStatus }) {
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
