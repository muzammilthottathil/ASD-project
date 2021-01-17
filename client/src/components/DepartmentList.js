import SimpleCard from './SimpleCard'

export default function DepartmentList() {
    const departments = [
        {
            deptName: 'Department-1',
            docDetails: [
                {
                    name: 'Doctor Name Here',
                    specialization: 'MBBS,MD,PHD,...'
                },
                {
                    name: 'Doctor Name Here',
                    specialization: 'MBBS,MD,PHD,...'
                },
                {
                    name: 'Doctor Name Here',
                    specialization: 'MBBS,MD,PHD,...'
                }
            ]
        },
        {
            deptName: 'Department-2',
            docDetails: [
                {
                    name: 'Doctor Name Here',
                    specialization: 'MBBS,MD,PHD,...'
                },
                {
                    name: 'Doctor Name Here',
                    specialization: 'MBBS,MD,PHD,...'
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
