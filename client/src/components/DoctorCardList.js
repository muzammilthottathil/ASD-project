import { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { useData } from './Context'
import SimpleCard from './SimpleCard'

export default function DoctorCardList() {
    const [details, setDetails] = useState([])
    const [allData, setAllData] = useState([])
    const { sortedHospitalData, searchValue, specificationValue } = useData()

    function filter(detailData) {
        specificationValue === 'All'
            ? setDetails(() => detailData)
            : setDetails(() =>
                  detailData.filter((el) =>
                      el.specifications.includes(specificationValue)
                  )
              )
    }

    function searchFilter() {
        const search = searchValue.toUpperCase()
        search === ''
            ? filter([...new Set(allData)])
            : filter(
                  allData.filter(
                      (el) => el.doc_name.toUpperCase().indexOf(search) > -1
                  )
              )
    }

    function getAllDoctors() {
        let arr = []
        sortedHospitalData.map((value) => {
            value.doctors.map((doc) => {
                arr.push(doc)
            })
        })
        setAllData(() => [...new Set(arr)])
        filter([...new Set(arr)])
    }
    useEffect(() => {
        getAllDoctors()
    }, [sortedHospitalData, specificationValue])

    useEffect(() => {
        searchFilter()
    }, [searchValue])

    console.log(details)
    return (
        <div className="mt-5">
            <Row>
                {details.map((value, index) => (
                    <div className="col-4" key={index}>
                        <SimpleCard
                            type={'doctor'}
                            name={value.doc_name}
                            details={{
                                specialization: value.specifications.join(','),
                                contact: ''
                            }}
                            id={value.doc_id}
                        />
                    </div>
                ))}
            </Row>
        </div>
    )
}
