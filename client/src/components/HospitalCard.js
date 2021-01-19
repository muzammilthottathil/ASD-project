import { useHistory } from 'react-router-dom'
import hospitalImage from '../Assets/hospitalImage.png'
import { useData } from './Context'

export default function HospitalCard({ id, name, contact, time }) {
    const history = useHistory()

    const { setCurrentHospital } = useData()

    function changeLoc() {
        setCurrentHospital(() => ({
            hos_id: id
        }))
        history.push('/hospital-details/map')
    }
    console.log('hello')
    return (
        <div
            style={{
                border: '2px solid #FFFFFF',
                borderRadius: '30px'
            }}
            className="m-3"
        >
            <div className="d-flex p-4">
                <div className="d-flex flex-column">
                    <img src={hospitalImage} alt="hospitalImage" height="150" />
                    <div
                        onClick={changeLoc}
                        style={{
                            color: '#201818',
                            textAlign: 'center',
                            backgroundColor: '#fff',
                            padding: '10px 20px',
                            borderRadius: '100px',
                            marginTop: '20px',
                            cursor: 'pointer'
                        }}
                    >
                        Get Location
                    </div>
                </div>

                <div className="ml-4">
                    <h4>{name}</h4>
                    <p
                        style={{
                            fontSize: '20px',
                            color: '#fffa'
                        }}
                    >
                        Booking : {contact}
                    </p>
                    <p
                        style={{
                            fontSize: '16px',
                            color: '#fff'
                        }}
                    >
                        Time :{' '}
                        {time?.map((value) => (
                            <>
                                <br />
                                {value}
                            </>
                        ))}
                    </p>
                </div>
            </div>
        </div>
    )
}
