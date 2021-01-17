import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/global.css'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Main from './components/Main'
import DoctorDetails from './components/DoctorDetails'
import HospitalDetais from './components/HospitalDetais'
import HospitalMap from './components/HospitalMap'

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/find-near" exact component={Main} />
                    <Route
                        path="/doctor-details"
                        exact
                        component={DoctorDetails}
                    />
                    <Route
                        path="/hospital-details"
                        exact
                        component={HospitalDetais}
                    />
                    <Route
                        path="/hospital-details/map"
                        exact
                        component={HospitalMap}
                    />

                    <Route path="*" component={Home} />
                </Switch>
            </Router>
        </>
    )
}

export default App
