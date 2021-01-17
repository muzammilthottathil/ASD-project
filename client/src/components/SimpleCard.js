import doctorImage from '../Assets/doctorImage.png'
import hospitalImage from '../Assets/hospitalImage.png'
import { Link } from 'react-router-dom'

import '../styles/Home.css'

export default function SimpleCard({ type, name, details }) {
    const { specialization, contact } = details
    return (
        <Link
            to={type === 'doctor' ? '/doctor-details' : '/hospital-details'}
            style={{
                textDecoration: 'none'
            }}
        >
            <div
                style={{
                    border: '2px solid #FFFFFF',
                    borderRadius: '30px',
                    cursor: 'pointer'
                }}
                className="m-3 simple-card"
            >
                <div className="d-flex p-4">
                    {type === 'doctor' ? (
                        <img src={doctorImage} alt="doctorImage" height="150" />
                    ) : (
                        <img
                            src={hospitalImage}
                            alt="hospitalImage"
                            height="150"
                        />
                    )}

                    <div className="ml-4">
                        <h3>{name}</h3>
                        <p
                            style={{
                                fontSize: '20px',
                                color: '#fffa'
                            }}
                        >
                            {type === 'doctor'
                                ? specialization
                                : `Booking Contact :${contact}`}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
