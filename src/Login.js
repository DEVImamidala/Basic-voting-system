import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = () => {

  const[data,setData]= useState({
    voterid:'',
    email:''

  })
  
  // const [error, setError] = useState('');
  const{voterid,email}=data
   const changeHandler =(e)=>{
 setData({...data,[e.target.name]: e.target.value});
   }
  const navigate = useNavigate();
  const loginsubmitHandler = async(e)=>{
  
    e.preventDefault()
    
    try{

      const response = await axios.post('http://localhost:8000/apiuser/login',data, {
        timeout:10000
    });
    if(response.status === 200){
      alert('sucess login')
    
    
      
      console.log(response.data);
      navigate("/Display", { state: { email: data.email ,voterid:data.voterid} });
    }
    else{
      alert('login fail')
    }
  }
  
  
    catch(error){
      console.log('error during login:',error);
    }
   
   

  }

  return (
    <>
    <div className='loginimage'>
        <div className='login'>
          <nav className='navbar'>
            <h3>  <em> <h2 className='registertag'>login here ****</h2></em>
            </h3>
          </nav>
          <div className='loginbody'>
         <form onSubmit={loginsubmitHandler}>
          <div  className='icon'>
          <svg  xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
         </div>
              <label className='forming'>voter Id:</label>
              <input type ="number"  className='logininput'  required name="voterid" value ={voterid} onChange={changeHandler} placeholder ="enter u r number here"/><br/><br/>
              <label className='forming'>email:</label>
              <input type ="text"   className='logininput'  required name="email" value={email}  onChange={changeHandler} placeholder='enter u r email here'/><br/><br/><br/>
              <input type ="submit"   id="name" name="login" value ="Login"/><br/>
          
           
          </form>
        
          </div>
        </div>
    </div>
    </>
  )
}

export default Login


