import SimpleCard from './SimpleCard'

export default function DepartmentList({ data }) {
    const departments = [
        {
            deptName: 'General Medicine',
            docDetails: [
                {
                    name: 'Dr. Ramachandran Nair',
                    specialization: 'General Medicine,Neurosurgery'
                },
                {
                    name: 'Dr.Niyasudheen KK',
                    specialization: 'General Medicine,Medical Gastroenterology'
                },
                {
                    name: 'Dr. Farhana Sakkeer',
                    specialization: 'General Medicine,Anesthesiology'
                }
            ]
        },
        {
            deptName: 'Pediatrics',
            docDetails: [
                {
                    name: 'Dr Althaf Ashraf',
                    specialization: 'Ophthalmology,Pediatrics'
                },
                {
                    name: 'Dr. Seema Vineeth',
                    specialization: 'Pediatrics,Neurosurgery'
                }
            ]
        }
    ]

    return (
        <div className="w-100">
            {departments.map((value, index) => (
                <div className="mt-2 mb-3" key={index}>
                    <h4>{value.deptName}</h4>
                    <hr color="#fff" />
                    <div className="row">
                        {value.docDetails.map((detailContent, index) => (
                            <div className="col-6" key={index}>
                                <SimpleCard
                                    type={'doctor'}
                                    name={detailContent.name}
                                    details={{
                                        specialization:
                                            detailContent.specialization,
                                        contact: ''
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
