import { useEffect, useState } from 'react'
import DoctorCardList from './DoctorCardList'
import Hedaer from './Hedaer'
import HospitalCardList from './HospitalCardList'
import Axios from 'axios'
import { useData } from './Context'
import { distanceCalculator } from './distanceCalculator'

export default function Main() {
    const {
        latLang,
        hospitalData,
        setSortedHospitalData,

        activeFilter,
        setActiveFilter,
        searchValue,
        setSearchValue,
        serviceValue,
        setServiceValue,
        specificationValue,
        setSpecificationValue
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

    function findingNearestHospital() {
        let hosWithDist = []
        hospitalData.map((value) => {
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

    useEffect(() => {
        setSortedHospitalData(() =>
            findingNearestHospital().sort(GetSortOrder('distance'))
        )
    }, [hospitalData])

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
                    <DoctorCardList />
                ) : (
                    <HospitalCardList />
                )}
            </div>
        </div>
    )
}
