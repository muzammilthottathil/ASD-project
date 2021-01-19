import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './Main'
import DoctorDetails from './DoctorDetails'
import HospitalDetais from './HospitalDetais'
import HospitalMap from './HospitalMap'
import Axios from 'axios'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { useData } from './Context'

function MainApp() {
    const [docData, setDocData] = useState({})
    const [hosData, setHosData] = useState([])
    const [hosDataAll, setHosDataAll] = useState([])
    const [hosDataP1, setHosDataP1] = useState({})

    const { setDoctorData, setHospitalData } = useData()

    function getDocData() {
        let requiredData = {}
        let goneThrough = []
        Axios.get('http://localhost:4000/doctor/data')
            .then((res) => {
                const response = res.data
                response.map((value1) => {
                    const doc_id = value1.doc_id
                    if (!goneThrough.includes(doc_id)) {
                        goneThrough.push(doc_id)
                        let arr = []
                        response.map((value2) => {
                            if (value2.doc_id === doc_id) {
                                arr.push({
                                    hos_id: value2.hos_id,
                                    hos_name: value2.hos_name,
                                    hos_contact: value2.hos_contact,
                                    time: value2.time.split(',')
                                })
                            }
                        })

                        requiredData[doc_id] = arr
                    }
                })
            })
            .then(() => {
                setDocData(() => requiredData)
                setDoctorData(() => requiredData)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    function getHosData() {
        let requiredData = []
        let goneThrough = []
        Axios.get('http://localhost:4000/hospital/data1')
            .then((res) => {
                const response = res.data
                response.map((value1) => {
                    if (!goneThrough.includes(value1.hos_id)) {
                        goneThrough.push(value1.hos_id)

                        let arr = []
                        response.map((value2) => {
                            if (value2.hos_id === value1.hos_id) {
                                arr.push(value2.ser_name)
                            }
                        })
                        requiredData.push({
                            hos_name: value1.hos_name,
                            hos_id: value1.hos_id,
                            hos_contact: value1.hos_contact,
                            hos_address: value1.hos_address,
                            hos_latitude: value1.hos_latitude,
                            hos_longitude: value1.hos_longitude,
                            services: arr
                        })
                    }
                })
            })
            .then(() => {
                setHosData(() => requiredData)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function getDocDataFull() {
        let requiredData = {}
        let goneThrough = []
        let goneThrough1 = []
        Axios.get('http://localhost:4000/doctor/data1')
            .then((res) => {
                const response = res.data
                // getting doc details
                let doctors = {}
                response.map((value3) => {
                    if (!goneThrough1.includes(value3.doc_id)) {
                        goneThrough1.push(value3.doc_id)
                        let arr2 = []
                        response.map((value4) => {
                            if (value3.doc_id === value4.doc_id) {
                                arr2.push(value4.spec_name)
                            }
                        })
                        doctors[value3.doc_id] = {
                            doc_id: value3.doc_id,
                            doc_name: value3.doc_name,
                            specifications: [...new Set(arr2)]
                        }
                    }
                })

                response.map((value1) => {
                    if (!goneThrough.includes(value1.hos_id)) {
                        goneThrough.push(value1.hos_id)
                        let arr1 = []
                        response.map((value2) => {
                            if (value1.hos_id === value2.hos_id) {
                                arr1.push(doctors[value2.doc_id])
                            }
                        })
                        requiredData[value1.hos_id] = {
                            hos_id: value1.hos_id,
                            doctors: [...new Set(arr1)]
                        }
                    }
                })
            })
            .then(() => {
                setHosDataP1(() => requiredData)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function getAllHosData() {
        let final = []
        hosData.map((values) => {
            final.push({
                ...values,
                doctors: hosDataP1[values.hos_id].doctors
            })
        })

        setHospitalData(() => final)
        setHosDataAll(() => final)
    }

    useEffect(() => {
        getDocData()
        getHosData()
        getDocDataFull()
        getAllHosData()
    }, [])
    // console.log(hosDataAll)
    return (
        <>
            <Button
                onClick={getAllHosData}
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    opacity: '0'
                }}
            >
                Click Me
            </Button>

            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/find-near" exact component={Main} />
                    <Route
                        path="/doctor-details"
                        exact
                        component={DoctorDetails}
                    />
                    <Route
                        path="/hospital-details"
                        exact
                        component={HospitalDetais}
                    />
                    <Route
                        path="/hospital-details/map"
                        exact
                        component={HospitalMap}
                    />

                    <Route path="*" component={Home} />
                </Switch>
            </Router>
        </>
    )
}

export default MainApp
