import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Person from './components/Person'
import AddPerson from './components/AddPerson'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Person/>}/>
          <Route path='/add-person' element={<AddPerson/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
