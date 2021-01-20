import Header2 from './Header2'
import hospitalImage from '../Assets/hospitalImage.png'
import { Link, useHistory } from 'react-router-dom'
import ServiceList from './ServiceList'
import DepartmentList from './DepartmentList'
import { useEffect, useState } from 'react'
import { useData } from './Context'
import { docSpec } from './docSpec'

export default function HospitalDetais() {
    const [details, setDetails] = useState({})
    const [depTabStatus, setDepTabStatus] = useState(false)

    const history = useHistory()

    const { currentHospital, hospitalData, setMapHospital } = useData()

    function getDetails() {
        hospitalData.map((val) => {
            if (val.hos_id === currentHospital.hos_id) {
                setDetails(() => ({
                    name: val.hos_name,
                    contact: val.hos_contact,
                    address: val.hos_address
                }))
            }
        })
    }

    function redirectToMaps() {
        hospitalData.map((val) => {
            if (val.hos_id === currentHospital.hos_id) {
                setMapHospital(() => val)
            }
        })

        history.push('/hospital-details/map')
    }

    useEffect(() => {
        getDetails()
    }, [currentHospital, hospitalData])

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
                    <div
                        onClick={redirectToMaps}
                        style={{
                            cursor: 'pointer',
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
                    </div>
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
                        {depTabStatus ? <DepartmentList /> : <ServiceList />}
                    </div>
                </div>
            </div>
        </div>
    )
}
