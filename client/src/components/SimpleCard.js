import doctorImage from '../Assets/doctorImage.png'
import hospitalImage from '../Assets/hospitalImage.png'
import { Link, useHistory } from 'react-router-dom'

import '../styles/Home.css'
import { useData } from './Context'
import { useEffect } from 'react'

export default function SimpleCard({ type, name, details, id }) {
    const { specialization, contact } = details
    const history = useHistory()

    const { setCurrentDoctor, setCurrentHospital } = useData()

    function setClick() {
        type === 'doctor'
            ? setCurrentDoctor(() => ({
                  doc_name: name,
                  doc_spec: specialization,
                  doc_id: id
              }))
            : setCurrentHospital(() => ({
                  hos_id: id
              }))
        type === 'doctor'
            ? history.push('/doctor-details')
            : history.push('/hospital-details')
    }

    return (
        <div onClick={setClick}>
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
        </div>
    )
}
