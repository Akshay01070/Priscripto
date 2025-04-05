import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Contacts from './pages/Contact'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Login from './pages/Login'
import About from './pages/About'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10% ]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Doctors' element={<Doctors/>} />
        <Route path='/Doctors/:speciality' element={<Doctors/>} />
        <Route path='/Contact' element={<Contacts/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/My-Appointment' element={<MyAppointments/>} />
        <Route path='/My-Profile' element={<MyProfile/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Appointment/:docId' element={<Appointment/>} />
      </Routes>
    </div>
  )
}

export default App