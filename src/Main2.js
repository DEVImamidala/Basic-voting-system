import React from 'react'
import { useNavigate } from 'react-router-dom'

const Main2 = () => {
const navigate = useNavigate();
const submit=(e)=>{
    navigate("/Home");
  }
  
  return (
    <>
  <div className='startingpage'>
      lorem
      <div className='startingpage1'>
        <div className='startingpage2'>
          <div className='startingpara'>
            <em> welcome to online voting poll </em>
          </div>
          <div className='startingpagelogo'>
            <div  className='startinglogo1'>
              <div>
                <svg  xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
              </div>
              <div id="icon" >
                <a  id="admin" href="Admin">Admin</a>
              </div>
          </div>
          </div>
        </div>
         
            <div className='bro'>
              <div >
                <em><h2>click here to vote</h2></em>
                <div className='votebutton1'>
               <button id='votebutton' onClick={submit}>To Vote</button>
               </div>
              </div>
            </div>

            <div className='brochild'>
              if u need to check for your voting status go through this  <a  id='checkstatus' href="/Status">check status</a>
            </div>

      </div>
          
  </div>

    </>
   
  )
}

export default Main2
