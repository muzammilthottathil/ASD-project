const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Password@123',
    database: 'find_my_doctor'
})

app.get('/test', (req, res) => {
    db.query('SELECT * FROM hospital', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})
app.get('/doctors/relation', (req, res) => {
    const query =
        ' select * from doctor inner join doctor_hospital on doctor.doc_id = doctor_hospital.doc_id inner join hospital on doctor_hospital.hos_id = hospital.hos_id;'
    db.query(query, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})
app.get('/hospital/relation', (req, res) => {
    const query =
        'select * from hospital inner join doctor_hospital on hospital.hos_id = doctor_hospital.hos_id inner join doctor on doctor_hospital.doc_id = doctor.doc_id;'
    db.query(query, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.get('/doctor/data', (req, res) => {
    const query =
        'select * from doctor_hospital inner join hospital on doctor_hospital.hos_id = hospital.hos_id;'
    db.query(query, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.get('/hospital/data1', (req, res) => {
    const query =
        'select * from hospital inner join hospital_services on hospital.hos_id = hospital_services.hos_id inner join services on hospital_services.ser_id = services.ser_id;'
    db.query(query, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.get('/doctor/data1', (req, res) => {
    const query =
        'select doctor.doc_id,doctor.doc_name,specialization.spec_name,doctor_hospital.hos_id,doctor_hospital.time from doctor inner join doctor_spec on doctor.doc_id = doctor_spec.doc_id inner join specialization on doctor_spec.spec_id = specialization.spec_id inner join doctor_hospital on doctor.doc_id = doctor_hospital.doc_id;'
    db.query(query, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.listen(4000, () => {
    console.log('Port is running successfully on port number 4000')
})
