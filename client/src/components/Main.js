import { useEffect, useState } from 'react'
import DoctorCardList from './DoctorCardList'
import Hedaer from './Hedaer'
import HospitalCardList from './HospitalCardList'
import Axios from 'axios'
import { useData } from './Context'
import { distanceCalculator } from './distanceCalculator'

export default function Main() {
    const [activeFilter, setActiveFilter] = useState('Doctor')
    const [searchValue, setSearchValue] = useState('')
    const [serviceValue, setServiceValue] = useState('All')
    const [specificationValue, setSpecificationValue] = useState('All')

    const {
        latLang,
        hospitalListDB,
        setHospitalListDB,
        nearestHospitalListDB,
        setNearestHospitalListDB,
        doctorListDB,
        setDoctorListDB,
        nearestDoctorListDB,
        setNearestDoctorListDB,
        setHosRelationDB
    } = useData()

    function GetSortOrder(prop) {
        return function (a, b) {
            if (a[prop] > b[prop]) {
                return 1
            } else if (a[prop] < b[prop]) {
                return -1
            }
            return 0
        }
    }

    function findingNearestHos() {
        let hosWithDist = []
        hospitalListDB.map((value, index) => {
            hosWithDist.push({
                ...value,
                distance: distanceCalculator(
                    latLang[0],
                    latLang[1],
                    Number(value.hos_latitude),
                    Number(value.hos_longitude)
                )
            })
        })
        return hosWithDist
    }
    function findingNearestDoc() {
        let docWithDist = []
        doctorListDB.map((value, index) => {
            docWithDist.push({
                doc_id: value.doc_id,
                doc_spec: value.doc_spec,
                doc_name: value.doc_name,
                distance: distanceCalculator(
                    latLang[0],
                    latLang[1],
                    Number(value.hos_latitude),
                    Number(value.hos_longitude)
                )
            })
        })
        return docWithDist
    }

    useEffect(() => {
        Axios.get('http://localhost:4000/test').then((response) => {
            setHospitalListDB(() => response.data)
        })
        Axios.get('http://localhost:4000/doctors/relation').then((response) => {
            console.log(response.data)
            setDoctorListDB(() => response.data)
        })
        Axios.get('http://localhost:4000/hospital/relation').then(
            (response) => {
                setHosRelationDB(() => response.data)
            }
        )
    }, [])
    useEffect(() => {
        setNearestHospitalListDB(() =>
            findingNearestHos().sort(GetSortOrder('distance'))
        )
        setNearestDoctorListDB(() =>
            findingNearestDoc().sort(GetSortOrder('distance'))
        )
    }, [])

    return (
        <div>
            <Hedaer
                variables={{
                    activeFilter,
                    setActiveFilter,
                    searchValue,
                    setSearchValue,
                    serviceValue,
                    setServiceValue,
                    specificationValue,
                    setSpecificationValue
                }}
            />
            <div
                style={{
                    margin: '20px 30px',
                    marginTop: '50px'
                }}
            >
                <h3>Nearest Matches Found</h3>
                <hr color="#fff" />
                {activeFilter === 'Doctor' ? (
                    <DoctorCardList details={nearestDoctorListDB} />
                ) : (
                    <HospitalCardList details={nearestHospitalListDB} />
                )}
            </div>
        </div>
    )
}
