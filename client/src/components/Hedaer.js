import '../styles/Home.css'
import line3 from '../Assets/line3.svg'
import { useState } from 'react'
import { Form } from 'react-bootstrap'

export default function Hedaer({ variables }) {
    const {
        activeFilter,
        setActiveFilter,
        searchValue,
        setSearchValue,
        serviceValue,
        setServiceValue,
        specificationValue,
        setSpecificationValue
    } = variables
    const [switchStatus, setSwitchStatus] = useState(false)

    const setFilter = () => {
        setSwitchStatus((prev) => !prev)
        setActiveFilter(switchStatus ? 'Doctor' : 'Hospital')
        setSearchValue('')
    }

    console.log(activeFilter, serviceValue, specificationValue, searchValue)

    const serviceAvailable = [
        {
            name: 'X-RAY'
        },
        {
            name: 'SCANNING'
        },
        {
            name: 'OPERATION'
        },
        {
            name: 'LABORATORY'
        },
        {
            name: 'LABOUR ROOM'
        }
    ]
    const Departments = [
        {
            name: 'Cardiology (Heart Care)'
        },
        {
            name: 'Oncology (Cancer Care)'
        },
        {
            name: 'Neurology'
        },
        {
            name: 'Urology'
        },
        {
            name: 'Surgical Gastroenterology'
        },
        {
            name: 'Medical Gastroenterology'
        },
        {
            name: 'Obstetrics and Gynaecology'
        },
        {
            name: 'Bone Marrow Transplant'
        }
    ]

    return (
        <div
            style={{
                backgroundColor: '#E9EDF0',
                borderRadius: '30px',
                color: '#201818',
                margin: '20px 30px',
                padding: '30px 50px'
            }}
        >
            <div className="d-flex justify-content-between">
                <h1
                    style={{
                        fontFamily: "'Racing Sans One', cursive",
                        fontSize: '60px'
                    }}
                >
                    FinD My Doctor
                </h1>

                <div className="switch-section">
                    <p
                        style={{
                            fontSize: '20px',
                            margin: '0',
                            marginRight: '80px'
                        }}
                    >
                        Filter By :
                    </p>
                    <div className="switch-movable" onClick={setFilter}>
                        <span className="doctor">DOCTOR</span>
                        <span>HOSPITAL</span>
                        <div
                            className={
                                switchStatus
                                    ? 'switch-movable-div'
                                    : 'switch-movable-div switch-moving'
                            }
                        >
                            <img src={line3} alt="line3" />
                        </div>
                        <div
                            className={
                                switchStatus
                                    ? 'switch-movable-div-down'
                                    : 'switch-movable-div-down switch-moving-down'
                            }
                        ></div>
                    </div>
                </div>
            </div>

            <div className="filter-search row">
                <div className="col-6">
                    <Form.Group
                        controlId="exampleForm.ControlSelect1"
                        className="d-flex align-items-center mt-4"
                    >
                        {!switchStatus ? (
                            <>
                                <p
                                    className=" m-0 mr-3"
                                    style={{ width: '35%' }}
                                >
                                    Department / Specification :
                                </p>
                                <Form.Control
                                    as="select"
                                    className="flex-grow-1"
                                    onChange={(e) =>
                                        setSpecificationValue(e.target.value)
                                    }
                                >
                                    <option value="All" defaultValue>
                                        All
                                    </option>
                                    {Departments.map((department, key) => (
                                        <option
                                            key={key}
                                            value={department.name}
                                        >
                                            {department.name}
                                        </option>
                                    ))}
                                </Form.Control>
                            </>
                        ) : (
                            <>
                                <p
                                    className=" m-0 mr-3"
                                    style={{ width: '35%' }}
                                >
                                    Services Available :
                                </p>
                                <Form.Control
                                    as="select"
                                    className="flex-grow-1"
                                    onChange={(e) =>
                                        setServiceValue(e.target.value)
                                    }
                                >
                                    <option value="All" defaultValue>
                                        All
                                    </option>
                                    {serviceAvailable.map((service, key) => (
                                        <option key={key} value={service.name}>
                                            {service.name}
                                        </option>
                                    ))}
                                </Form.Control>
                            </>
                        )}
                    </Form.Group>
                </div>
                <div className="col-6">
                    <Form.Group
                        controlId="exampleForm.ControlSelect1"
                        className="d-flex align-items-center mt-4"
                    >
                        <p className=" m-0 w-25 mr-3">Search Here :</p>
                        <Form.Control
                            type="text"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            className="flex-grow-1"
                            placeholder="Search here ..."
                        />
                    </Form.Group>
                </div>
            </div>
        </div>
    )
}
