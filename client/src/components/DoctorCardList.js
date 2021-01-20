import { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { useData } from './Context'
import SimpleCard from './SimpleCard'

export default function DoctorCardList() {
    const [details, setDetails] = useState([])
    const [allData, setAllData] = useState([])
    const { sortedHospitalData, searchValue, specificationValue } = useData()

    function filter(detailData) {
        console.log('helo')
        // spec filter
        specificationValue === 'All'
            ? setDetails(() => allData)
            : setDetails(() =>
                  detailData.filter((el) =>
                      el.specifications.includes(specificationValue)
                  )
              )

        // search filter
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
