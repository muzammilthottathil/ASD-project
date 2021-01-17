import Header2 from './Header2'
import hospitalImage from '../Assets/hospitalImage.png'
import MapContainer from './Map'

export default function HospitalMap() {
    const details = {
        name: 'Hospital Name Here',
        contact: '+91 9876543210',
        address: 'ABCD colony, Tirur'
    }
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
                    <h3 className="mt-5">{details.name}</h3>
                    <p
                        style={{
                            fontSize: '20px',
                            color: '#fffa'
                        }}
                    >
                        Booking info : {details.contact}
                    </p>
                    <p
                        style={{
                            fontSize: '16px',
                            color: '#fff'
                        }}
                    >
                        {details.address}
                    </p>
                </div>
                <div
                    className="col-9 "
                    style={{
                        border: '1px solid #FFFFFF',
                        height: '70vh',
                        borderRadius: '30px'
                    }}
                >
                    <h1>Map DISPLAYS HERE</h1>
                    <MapContainer />
                </div>
            </div>
        </div>
    )
}
