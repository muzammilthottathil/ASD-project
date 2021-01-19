import { Row } from 'react-bootstrap'
import SimpleCard from './SimpleCard'

export default function DoctorCardList({ details }) {
    return (
        <div className="mt-5">
            <Row>
                {details.map((value, index) => (
                    <div className="col-4" key={index}>
                        <SimpleCard
                            type={'doctor'}
                            name={value.doc_name}
                            details={{
                                specialization: value.doc_spec,
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
