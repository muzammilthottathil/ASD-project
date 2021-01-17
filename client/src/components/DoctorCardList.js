import { Row } from 'react-bootstrap'
import SimpleCard from './SimpleCard'

export default function DoctorCardList() {
    return (
        <div className="mt-5">
            <Row>
                <div className="col-4">
                    <SimpleCard
                        type={'doctor'}
                        name={'Doctor Name Here'}
                        details={{
                            specialization: 'MBBS,MD,PHD,...',
                            contact: ''
                        }}
                    />
                </div>
                <div className="col-4">
                    <SimpleCard
                        type={'doctor'}
                        name={'Doctor Name Here'}
                        details={{
                            specialization: 'MBBS,MD,PHD,...',
                            contact: ''
                        }}
                    />
                </div>
                <div className="col-4">
                    <SimpleCard
                        type={'doctor'}
                        name={'Doctor Name Here'}
                        details={{
                            specialization: 'MBBS,MD,PHD,...',
                            contact: ''
                        }}
                    />
                </div>
            </Row>
            <Row>
                <div className="col-4">
                    <SimpleCard
                        type={'doctor'}
                        name={'Doctor Name Here'}
                        details={{
                            specialization: 'MBBS,MD,PHD,...',
                            contact: ''
                        }}
                    />
                </div>
                <div className="col-4">
                    <SimpleCard
                        type={'doctor'}
                        name={'Doctor Name Here'}
                        details={{
                            specialization: 'MBBS,MD,PHD,...',
                            contact: ''
                        }}
                    />
                </div>
                <div className="col-4">
                    <SimpleCard
                        type={'doctor'}
                        name={'Doctor Name Here'}
                        details={{
                            specialization: 'MBBS,MD,PHD,...',
                            contact: ''
                        }}
                    />
                </div>
            </Row>
            <Row>
                <div className="col-4">
                    <SimpleCard
                        type={'doctor'}
                        name={'Doctor Name Here'}
                        details={{
                            specialization: 'MBBS,MD,PHD,...',
                            contact: ''
                        }}
                    />
                </div>
                <div className="col-4">
                    <SimpleCard
                        type={'doctor'}
                        name={'Doctor Name Here'}
                        details={{
                            specialization: 'MBBS,MD,PHD,...',
                            contact: ''
                        }}
                    />
                </div>
                <div className="col-4">
                    <SimpleCard
                        type={'doctor'}
                        name={'Doctor Name Here'}
                        details={{
                            specialization: 'MBBS,MD,PHD,...',
                            contact: ''
                        }}
                    />
                </div>
            </Row>
        </div>
    )
}
