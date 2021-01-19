import Header2 from './Header2'
import hospitalImage from '../Assets/hospitalImage.png'
import MapContainer2 from './Map2'
import { useData } from './Context'
import { useEffect } from 'react'

export default function HospitalMap() {
    const {
        currentHospital,
        hospitalListDB,
        mapHospital,
        setMapHospital
    } = useData()

    function findCurrent() {
        let details = {
            hos_id: currentHospital.hos_id
        }
        hospitalListDB.map((info, value) => {
            if (info.hos_id === currentHospital.hos_id) {
                details.hos_address = info.hos_address
                details.hos_contact = info.hos_contact
                details.hos_name = info.hos_name
            }
        })
        return details
    }
    console.log(mapHospital)
    useEffect(() => {
        setMapHospital(() => findCurrent())
    }, [])
    console.log(mapHospital)
    return (
        <div
            className="p-5 m-auto"
            style={{
                width: '90%'
            }}
        >
            <Header2 />
            <div className="row ">
                <div className="col-3">
                    <img src={hospitalImage} alt="hospitalImage" />
                    <h3 className="mt-5">{mapHospital.hos_name}</h3>
                    <p
                        style={{
                            fontSize: '20px',
                            color: '#fffa'
                        }}
                    >
                        Booking info : {mapHospital.hos_contact}
                    </p>
                    <p
                        style={{
                            fontSize: '16px',
                            color: '#fff'
                        }}
                    >
                        {mapHospital.hos_address}
                    </p>
                </div>
                <div
                    className="col-9 "
                    style={{
                        height: '70vh',
                        borderRadius: '30px',
                        padding: '0'
                    }}
                >
                    <MapContainer2 />
                </div>
            </div>
        </div>
    )
}
