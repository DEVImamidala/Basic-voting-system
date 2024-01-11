 import React from 'react'
import {BrowserRouter,Routes ,Route } from 'react-router-dom'
import Home from './Home'
import Adminlogin from './Adminlogin'
import RangeBars from './RangeBars'

// import Exit from './Exit'
import Login from './Login'
// import Voting from './Voting'
import './App.css'

import Display from './Display'
import  Exitpage from "./Exitpage"
import Main2 from './Main2'
import Admin from './Admin'
import Status from './Status'



 
   function App() {
   return (
     <div>
       <BrowserRouter>
       <Routes>
      
        {/* <Route path ="/Voting" element={<Voting/>}/> */}
        {/* <Route path="/Exit" element={<Exit/>}/> */}
        <Route path="/" element={<Main2/>} />
        <Route path ="/Adminlogin" element={<Adminlogin/>}/>
        <Route path ="/RangeBars" element={<RangeBars/>}/>          
       
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Display" element={<Display/>}/>
        <Route path='/Status' element={<Status/>}/>
        <Route path="/Exitpage" element={<Exitpage/>}/>
       </Routes>
       </BrowserRouter>

     </div>
   )
 }
 export default App;
 