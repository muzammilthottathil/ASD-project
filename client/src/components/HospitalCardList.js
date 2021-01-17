import { Row } from 'react-bootstrap'
import SimpleCard from './SimpleCard'

export default function HospitalCardList() {
    return (
        <div className="mt-5">
            <Row>
                <div className="col-4">
                    <SimpleCard
                        type={'Hospital'}
                        name={'Hospital Name Here'}
                        details={{
                            specialization: '',
                            contact: '+91 9876543210'
                        }}
                    />
                </div>
                <div className="col-4">
                    <SimpleCard
                        type={'Hospital'}
                        name={'Hospital Name Here'}
                        details={{
                            specialization: '',
                            contact: '+91 9876543210'
                        }}
                    />
                </div>
                <div className="col-4">
                    <SimpleCard
                        type={'Hospital'}
                        name={'Hospital Name Here'}
                        details={{
                            specialization: '',
                            contact: '+91 9876543210'
                        }}
                    />
                </div>
            </Row>
            <Row>
                <div className="col-4">
                    <SimpleCard
                        type={'Hospital'}
                        name={'Hospital Name Here'}
                        details={{
                            specialization: '',
                            contact: '+91 9876543210'
                        }}
                    />
                </div>
                <div className="col-4">
                    <SimpleCard
                        type={'Hospital'}
                        name={'Hospital Name Here'}
                        details={{
                            specialization: '',
                            contact: '+91 9876543210'
                        }}
                    />
                </div>
                <div className="col-4">
                    <SimpleCard
                        type={'Hospital'}
                        name={'Hospital Name Here'}
                        details={{
                            specialization: '',
                            contact: '+91 9876543210'
                        }}
                    />
                </div>
            </Row>
            <Row>
                <div className="col-4">
                    <SimpleCard
                        type={'Hospital'}
                        name={'Hospital Name Here'}
                        details={{
                            specialization: '',
                            contact: '+91 9876543210'
                        }}
                    />
                </div>
                <div className="col-4">
                    <SimpleCard
                        type={'Hospital'}
                        name={'Hospital Name Here'}
                        details={{
                            specialization: '',
                            contact: '+91 9876543210'
                        }}
                    />
                </div>
                <div className="col-4">
                    <SimpleCard
                        type={'Hospital'}
                        name={'Hospital Name Here'}
                        details={{
                            specialization: '',
                            contact: '+91 9876543210'
                        }}
                    />
                </div>
            </Row>
        </div>
    )
}
