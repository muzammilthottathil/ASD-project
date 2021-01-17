export default function ServiceList() {
    const serviceNameList = [
        'X-RAY',
        'SCANNING',
        'OPERATION',
        'LABORATORY',
        'LABOUR ROOM'
    ]

    return (
        <div className="row w-100 m-auto">
            {serviceNameList.map((value, key) => (
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
