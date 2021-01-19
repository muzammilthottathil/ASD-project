import { Row } from 'react-bootstrap'
import SimpleCard from './SimpleCard'

export default function HospitalCardList({ details }) {
    console.log(details)
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
