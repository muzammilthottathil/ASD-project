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
                            FinD My Doctor
                        </h1>
                        <p
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: '16px',
                                marginTop: '20px'
                            }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquam quia vitae suscipit quaerat. Ad a
                            voluptates amet beatae quidem. Quibusdam repellendus
                            molestiae non perferendis aperiam vitae explicabo,
                            quidem cumque aspernatur. Quibusdam aliquam
                            perferendis nemo architecto optio dolorem, facilis
                            labore rem tempora, fugiat laudantium atque nesciunt
                            placeat dolorum nulla a velit!
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
                        <img src={DoctorHero} height="800" alt="Doctor Hero" />
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
