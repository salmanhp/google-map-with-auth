// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

import Navbar from "./component/Navbar"
import Login from './component/Login';
import LocationForm from './component/LocationForm';
import Map from './component/Map';
import Dashboard from './component/Dashboard';
import { useState } from 'react';

function App() {
  const location = useLocation();
  const [getLocation, setGetLocation] = useState({});
  // console.log(getLocation);

  return (
    <>
      {location.pathname == "/map" | location.pathname == "/lat-long" ? <Dashboard /> : <Navbar />}
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/lat-long' element={<LocationForm setGetLocation={setGetLocation} />} />
        <Route path='/map' element={<Map getLocation={getLocation} />} />
      </Routes>
    </>
  )
}

export default App
