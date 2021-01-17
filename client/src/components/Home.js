import { Button, Container, Col } from 'react-bootstrap'
import DoctorHero from '../Assets/DoctorHero.png'
import locIcon from '../Assets/locIcon.svg'
import Modal from './Modal'
import { useState } from 'react'

export default function Home() {
    const [modalStatus, setModalStatus] = useState(false)
    return (
        <>
            <div
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div className="row  p-5">
                    <Col md={{ span: 5, offset: 1 }} className="m-auto">
                        <h1
                            style={{
                                fontFamily: "'Racing Sans One', cursive",
                                fontSize: '100px'
                            }}
                        >
                            FindMyDoctor
                        </h1>
                        <p
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: '16px',
                                marginTop: '20px'
                            }}
                        >
                            The go-to app to find your doctor wherever you are, whenever you want. Get well soon!
                        </p>
                        <Button
                            variant="secondary"
                            style={{
                                marginTop: '20px'
                            }}
                            onClick={() => setModalStatus(true)}
                        >
                            Choose Your Location
                            <img
                                className="ml-2"
                                src={locIcon}
                                alt="location Icon"
                            />
                        </Button>
                    </Col>
                    <div className="col-5">
                        <img src={DoctorHero} height="800" width="600" alt="Doctor Hero" />
                    </div>
                </div>
            </div>

            <div className="map-modal">
                <Modal
                    modalStatus={modalStatus}
                    setModalStatus={setModalStatus}
                />
            </div>
        </>
    )
}