import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
// import tdp from "./assets/tdp.jpg";
// import tick from './src/assets/tick.jpg';
// import Modal from './Modal';
import { useLocation } from 'react-router-dom';

const Display = () => {
 
const location = useLocation();
const { email } = location.state || null;
const { voterid }= location.state || null;
const [data,setData]= useState({
    email:'',
    value:'',
    voterid:''

  })
  // const [isModalOpen, setModalOpen] = useState(false);
const navigate = useNavigate();
// to handle voting form 
const SubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        email: location.state.email,
        vote: data.value,
        voterid:location.state.voterid
      };
      console.log(formData);
      const response = await axios.post("http://localhost:8000/apiuser/voting", formData);
      console.log(response.data);
      // setModalOpen(true);
      navigate("/Exitpage", alert("response has been recorded"));
    } catch (error) {
      console.log("error during connection");
    }
  };
  
const changeHandler = (e) => {
    setData({ ...data, value: e.target.value });
};
// const closeModal =()=>{
//   setModalOpen(false);
// };
  
  

  

  return (
    <>
    <div className='displayimg'>
      <nav>
        <div className='main'>
         
          <div className='main1'><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512">
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                </svg>    </div>
          <div  className='emaildisplay'>{email}</div>
          {/* <div>{voterid}</div> */}
        
      
          
        </div>
        
     
      </nav>
      
      
      
      
      <h1 className='blockquote'>Voting is not only our right—it is our power</h1>
        <div className='card1'>
             QUESTION:WHOM DO U VOTE ? <br/><br/>
        <div>

      
                <form onSubmit={SubmitHandler}>
                  <label >
                  <input type="radio"  name="vote" value='tdp' onChange={changeHandler}   checked={data.value === 'tdp'}/><button id="tdp" >TDP</button>
                  </label><br/><br/>
                 {/* <img height="17px" src={tdp} alt ="TDP"/> */}
                  <label  >
                  <input type="radio" id="vote" name="vote" value='ycp' onChange={changeHandler}checked={data.value === 'ycp'}/><button id="ycp" >YCP</button>
                  </label><br/><br/>
                  <label>
                  <input  type="radio" id="vote" name="vote" value='janasena' onChange={changeHandler} checked={data.value === 'janasena'} /><button id="janasena"  >JANASENA</button>
                  </label><br/><br/>
                  <label>
                  <input  type="radio"  id="vote" name="vote" value='bjp'onChange={changeHandler} checked={data.value === 'bjp'}/><button id="bjp" >BJP</button>
                  </label><br/><br/>
                  <label>
                  <input type="radio"   id="vote" name="vote" value='prajasanti'onChange={changeHandler} checked={data.value === 'prajasanti'} /><button id="prajasanti"  >PRAJASANTI</button>
                  </label><br/><br/>
                  <input type="submit" value="submit"  id="name1"/>
              </form>
           
               
        </div>
        {/* {isModalOpen && <Modal onClose={closeModal}/>} */}
        </div>
    </div>
      
             
        
 
    </>
  )
}

export default Display




