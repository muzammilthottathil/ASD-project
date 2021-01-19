import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/global.css'
import MainApp from './components/MainApp'
import { DataProvider } from './components/Context'

function App() {
    return (
        <DataProvider>
            <MainApp />
        </DataProvider>
    )
}

export default App
