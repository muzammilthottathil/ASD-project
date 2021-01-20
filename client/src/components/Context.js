import { createContext, useContext, useState } from 'react'

const DataContext = createContext()

export function useData() {
    return useContext(DataContext)
}

export function DataProvider({ children }) {
    const [hospitalListDB, setHospitalListDB] = useState([])
    const [doctorListDB, setDoctorListDB] = useState([])
    const [nearestHospitalListDB, setNearestHospitalListDB] = useState([])
    const [nearestDoctorListDB, setNearestDoctorListDB] = useState([])
    const [hosRelationDB, setHosRelationDB] = useState([])
    const [currentDoctor, setCurrentDoctor] = useState(null)

    const [currentHospital, setCurrentHospital] = useState(null)
    const [mapHospital, setMapHospital] = useState({})

    const [activeFilter, setActiveFilter] = useState('Doctor')
    const [searchValue, setSearchValue] = useState('')
    const [serviceValue, setServiceValue] = useState('All')
    const [specificationValue, setSpecificationValue] = useState('All')

    const [doctorData, setDoctorData] = useState([])
    const [hospitalData, setHospitalData] = useState([])
    const [sortedHospitalData, setSortedHospitalData] = useState([])

    const latLang = [11.026951425013214, 76.09385981711324]

    const value = {
        latLang,
        hospitalListDB,
        setHospitalListDB,
        nearestHospitalListDB,
        setNearestHospitalListDB,
        nearestDoctorListDB,
        setNearestDoctorListDB,
        doctorListDB,
        setDoctorListDB,
        currentDoctor,
        setCurrentDoctor,
        currentHospital,
        setCurrentHospital,
        hosRelationDB,
        setHosRelationDB,

        activeFilter,
        setActiveFilter,
        searchValue,
        setSearchValue,
        serviceValue,
        setServiceValue,
        specificationValue,
        setSpecificationValue,

        mapHospital,
        setMapHospital,
        doctorData,
        setDoctorData,
        hospitalData,
        setHospitalData,
        sortedHospitalData,
        setSortedHospitalData
    }
    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}
