import Header2 from './Header2'
import doctorImage from '../Assets/doctorImage.png'
import HospitalCard from './HospitalCard'

export default function DoctorDetails() {
    const name = 'Doctor Name Here'
    const specification = 'MBBS,MD,PHD,...'
    const hosName = 'Hospital Name Here'
    const contact = '+91 9876543210'
    const time = [
        '9 : 00 AM to 12 : 00 PM',
        '3 : 00 PM to 8 : 00 PM',
        '8 : 30 PM to 11 : 00 PM'
    ]
    const id = 'id-1'
    return (
        <div
            className="p-5 m-auto"
            style={{
                width: '90%'
            }}
        >
            <Header2 />
            <div className="row ">
                <div className="col-3">
                    <img src={doctorImage} alt="doctorImage" />
                    <h3 className="mt-5">{name}</h3>
                    <p
                        style={{
                            fontSize: '20px',
                            color: '#fffa'
                        }}
                    >
                        {specification}
                    </p>
                </div>
                <div
                    className="col-9 "
                    style={{
                        border: '1px solid #FFFFFF',
                        borderRadius: '30px'
                    }}
                >
                    <div className="p-3">
                        <div className="row">
                            <div className="col-6">
                                <HospitalCard
                                    name={hosName}
                                    contact={contact}
                                    time={time}
                                    id={id}
                                />
                            </div>
                            <div className="col-6">
                                <HospitalCard
                                    name={hosName}
                                    contact={contact}
                                    time={time}
                                    id={id}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <HospitalCard
                                    name={hosName}
                                    contact={contact}
                                    time={time}
                                    id={id}
                                />
                            </div>
                            <div className="col-6">
                                <HospitalCard
                                    name={hosName}
                                    contact={contact}
                                    time={time}
                                    id={id}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <HospitalCard
                                    name={hosName}
                                    contact={contact}
                                    time={time}
                                    id={id}
                                />
                            </div>
                            <div className="col-6">
                                <HospitalCard
                                    name={hosName}
                                    contact={contact}
                                    time={time}
                                    id={id}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
