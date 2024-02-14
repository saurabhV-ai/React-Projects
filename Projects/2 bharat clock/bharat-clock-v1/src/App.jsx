import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import AppName from './components/AppName'
import AppDescription from './components/AppDescription'
import CurrentTime from './components/CurrentTime'

function App() {
  return (
    <center className='main-container'>
      <AppName></AppName>
      <AppDescription></AppDescription>
      <CurrentTime></CurrentTime>
    </center>
  )
}

export default App
