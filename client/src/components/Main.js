import { useState } from 'react'
import DoctorCardList from './DoctorCardList'
import Hedaer from './Hedaer'
import HospitalCardList from './HospitalCardList'

export default function Main() {
    const [activeFilter, setActiveFilter] = useState('Doctor')
    const [searchValue, setSearchValue] = useState('')
    const [serviceValue, setServiceValue] = useState('All')
    const [specificationValue, setSpecificationValue] = useState('All')

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
