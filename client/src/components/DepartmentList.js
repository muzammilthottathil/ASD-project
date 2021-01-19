import { useState, useEffect } from 'react'
import { useData } from './Context'
import { docSpec } from './docSpec'
import SimpleCard from './SimpleCard'

export default function DepartmentList() {
    const [specification, setSpecification] = useState([])

    const { currentHospital, hospitalData } = useData()

    function getDetails() {
        let arr = []
        let allDoctors = []

        hospitalData.map((val) => {
            if (val.hos_id === currentHospital.hos_id) {
                allDoctors = val.doctors
            }
        })
        docSpec.forEach((specName) => {
            let docDetails = []
            allDoctors.forEach((doc) => {
                if (doc.specifications.includes(specName)) {
                    docDetails.push({
                        doc_name: doc.doc_name,
                        doc_id: doc.doc_id,
                        doc_spec: doc.specifications
                    })
                }
            })
            if (docDetails.length > 0) {
                arr.push({
                    specification: specName,
                    docDetails: docDetails
                })
            }
        })
        setSpecification(() => arr)
    }

    useEffect(() => {
        getDetails()
    }, [currentHospital, hospitalData])
    return (
        <div className="w-100">
            {specification.map((value, index) => (
                <div className="mt-2 mb-3" key={index}>
                    <h4>{value.specification}</h4>
                    <hr color="#fff" />
                    <div className="row">
                        {value.docDetails.map((doctor, index) => (
                            <div className="col-6" key={index}>
                                <SimpleCard
                                    type={'doctor'}
                                    name={doctor.doc_name}
                                    details={{
                                        specialization: doctor.doc_spec.join(
                                            ', '
                                        ),
                                        contact: ''
                                    }}
                                    id={doctor.doc_id}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
