import { useEffect, useState } from 'react'
import { useData } from './Context'

export default function ServiceList() {
    const [services, setServices] = useState([])

    const { currentHospital, hospitalData } = useData()

    function getDetails() {
        hospitalData.map((val) => {
            if (val.hos_id === currentHospital.hos_id) {
                setServices(() => [...new Set(val.services)])
            }
        })
    }

    useEffect(() => {
        getDetails()
    }, [currentHospital, hospitalData])

    return (
        <div className="row w-100 m-auto">
            {services.map((value, key) => (
                <div className="col-4 mb-5 mt-3" key={key}>
                    <div
                        className="text-align-center"
                        style={{
                            border: '1px solid #fff',
                            fontSize: '16px',
                            backgroundColor: '#40353F',
                            padding: '30px'
                        }}
                    >
                        {value}
                    </div>
                </div>
            ))}
        </div>
    )
}
