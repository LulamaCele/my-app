import React from 'react';
import './App.css';
import {Nav} from './components/nav/Nav';
import {Home} from './pages/home/Home';
import {Services} from './pages/services/Services';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
     {/* <Home /> */}
     <Routes>
     <Route path='' element={<Home />}/>
     <Route path='/services' element={<Services />} />
     </Routes>
    </div>
  );
}

export default App;
