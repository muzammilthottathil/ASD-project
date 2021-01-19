import Header2 from './Header2'
import hospitalImage from '../Assets/hospitalImage.png'
import { Link } from 'react-router-dom'
import ServiceList from './ServiceList'
import DepartmentList from './DepartmentList'
import { useEffect, useState } from 'react'
import { useData } from './Context'
import { docSpec } from './docSpec'

export default function HospitalDetais() {
    const [infoHosArray, setInfoHosArray] = useState([])
    const [infoDep, setInfoDep] = useState([])

    const { currentHospital, hosRelationDB } = useData()

    const details = {
        name: 'Hospital Name Here',
        contact: '+91 9876543210',
        address: 'ABCD colony, Tirur'
    }

    function findHosData() {
        let info = []
        hosRelationDB.map((value, index) => {
            if (value.hos_id === currentHospital.hos_id) {
                info.push({
                    hos_name: value.hos_name,
                    hos_id: value.hos_id,
                    hos_contact: value.hos_contact
                })
            }
        })
        return info
    }

    const [depTabStatus, setDepTabStatus] = useState(false)

    useEffect(() => {
        setInfoHosArray(() => findHosData())
    }, [currentHospital])

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
                    <h3 className="mt-5">{infoHosArray.hos_name}</h3>
                    <p
                        style={{
                            fontSize: '20px',
                            color: '#fffa'
                        }}
                    >
                        Booking info : {infoHosArray.hos_contact}
                    </p>
                    <p
                        style={{
                            fontSize: '16px',
                            color: '#fff'
                        }}
                    >
                        {infoHosArray.hos_address}
                    </p>
                    <Link
                        to="/hospital-details/map"
                        style={{
                            textDecoration: 'none',
                            color: '#201818',
                            textAlign: 'center',
                            backgroundColor: '#fff',
                            padding: '10px 20px',
                            borderRadius: '100px',
                            marginTop: '50px',
                            width: '260px',
                            display: 'block'
                        }}
                    >
                        Get Location
                    </Link>
                </div>
                <div className="col-9 ">
                    <div className="row">
                        <div
                            className="col-5"
                            onClick={() => setDepTabStatus(() => true)}
                            style={{
                                border: '1px solid #FFFFFF',
                                borderRadius: '30px',
                                textAlign: 'center',
                                padding: '20px',
                                cursor: 'pointer',
                                color: depTabStatus ? '#201818' : '#fff',
                                backgroundColor: depTabStatus
                                    ? '#fff'
                                    : '#201818'
                            }}
                        >
                            Department
                        </div>
                        <div className="col-1"></div>
                        <div
                            className="col-5 offset-1"
                            onClick={() => setDepTabStatus(() => false)}
                            style={{
                                border: '1px solid #FFFFFF',
                                borderRadius: '30px',
                                textAlign: 'center',
                                padding: '20px',
                                cursor: 'pointer',
                                color: !depTabStatus ? '#201818' : '#fff',
                                backgroundColor: !depTabStatus
                                    ? '#fff'
                                    : '#201818'
                            }}
                        >
                            Services
                        </div>
                    </div>
                    <div
                        className="row"
                        style={{
                            border: '1px solid #FFFFFF',
                            borderRadius: '30px',
                            marginTop: '60px',
                            minHeight: '500px',
                            padding: '30px 40px'
                        }}
                    >
                        {depTabStatus ? (
                            <DepartmentList data={infoDep} />
                        ) : (
                            <ServiceList />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
