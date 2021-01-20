import { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import SimpleCard from './SimpleCard'
import { useData } from './Context'

export default function HospitalCardList() {
    const [details, setDetails] = useState([])
    const { sortedHospitalData, searchValue, serviceValue } = useData()

    function filter(detailData) {
        serviceValue === 'All'
            ? setDetails(() => detailData)
            : setDetails(() =>
                  detailData.filter((el) => el.services.includes(serviceValue))
              )
    }

    function searchFilter() {
        const search = searchValue.toUpperCase()
        search === ''
            ? filter([...sortedHospitalData])
            : filter(
                  [...sortedHospitalData].filter(
                      (el) => el.hos_name.toUpperCase().indexOf(search) > -1
                  )
              )
    }

    useEffect(() => {
        filter([...sortedHospitalData])
    }, [sortedHospitalData, serviceValue])

    useEffect(() => {
        searchFilter()
    }, [searchValue])

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
