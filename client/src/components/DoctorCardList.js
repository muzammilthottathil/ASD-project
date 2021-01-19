import { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { useData } from './Context'
import SimpleCard from './SimpleCard'

export default function DoctorCardList() {
    const [details, setDetails] = useState([])
    const { sortedHospitalData } = useData()
    function getAllDoctors() {
        let arr = []
        sortedHospitalData.map((value) => {
            value.doctors.map((doc) => {
                arr.push(doc)
            })
        })
        setDetails(() => [...new Set(arr)])
    }
    useEffect(() => {
        getAllDoctors()
    }, [sortedHospitalData])
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
