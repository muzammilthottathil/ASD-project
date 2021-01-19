import { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import SimpleCard from './SimpleCard'
import { useData } from './Context'

export default function HospitalCardList() {
    const [details, setDetails] = useState([])
    const { sortedHospitalData } = useData()
    function getDetails() {
        setDetails(() => sortedHospitalData)
    }
    useEffect(() => {
        getDetails()
    }, [sortedHospitalData])
    return (
        <div className="mt-5">
            <Row>
                {details.map((value, index) => (
                    <div className="col-4" key={index}>
                        <SimpleCard
                            type={'Hospital'}
                            name={value.hos_name}
                            details={{
                                specialization: '',
                                contact: value.hos_contact
                            }}
                            id={value.hos_id}
                        />
                    </div>
                ))}
            </Row>
        </div>
    )
}
