import Header2 from './Header2'
import doctorImage from '../Assets/doctorImage.png'
import HospitalCard from './HospitalCard'
import { useData } from './Context'
import { useEffect, useState } from 'react'

export default function DoctorDetails() {
    const [infoArray, setInfoArray] = useState([])

    const { currentDoctor, doctorListDB } = useData()

    function makeList() {
        let info = []
        doctorListDB.map((value, index) => {
            if (value.doc_id === currentDoctor.doc_id) {
                info.push({
                    hos_name: value.hos_name,
                    hos_id: value.hos_id,
                    hos_contact: value.hos_contact,
                    time: value.time.split(',')
                })
            }
        })
        return info
    }

    useEffect(() => {
        setInfoArray(() => makeList())
    }, [currentDoctor])
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
                    <img src={doctorImage} alt="doctorImage" />
                    <h3 className="mt-5">{currentDoctor.doc_name}</h3>
                    <p
                        style={{
                            fontSize: '20px',
                            color: '#fffa'
                        }}
                    >
                        {currentDoctor.doc_spec}
                    </p>
                </div>
                <div
                    className="col-9 "
                    style={{
                        border: '1px solid #FFFFFF',
                        borderRadius: '30px'
                    }}
                >
                    <div className="p-3">
                        <div className="row">
                            {infoArray.map((info, index) => (
                                <div className="col-6" key={index}>
                                    <HospitalCard
                                        name={info.hos_name}
                                        contact={info.hos_contact}
                                        time={info.time}
                                        id={info.hos_id}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
