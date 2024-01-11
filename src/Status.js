import React,{useState} from 'react'
import axios from 'axios'

const Checkstatus = () => {
    const[data,setData]=useState({
        voterid:''
})
const{voterid}= data;

const changeHandler=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
}
const SubmitHandler=async(e)=>{
    e.preventDefault();
    try{
    const response = await axios.post('http://localhost:8000/getvoterid',data);
    console.log(response.data.status);
     if (response.data.status === 0 ) {
       alert('voterId not found');
       return;
     }
     alert('voterId is found')
        console.log(response.data);
    
  
}
catch(error){
  console.error('Error during registration:', error);
}
}

  return (
    <>
    <div className='checkstatus'>
      <div className='voterid2'>
    <h2 className='voterid1'> Enter u r voterid Card number below :</h2>
      <div className="voterid">
      
        <form  onSubmit={SubmitHandler}>
          <label style={{color:'white',fontSize:'25px', paddingRight:'2%'}}>voterid:</label>
            <input type="numbers"   name="voterid"  id="voterid" value={voterid} onChange={changeHandler}/><br/><br/>
            <input type="submit"   value="continue" id='continue'/>

        </form>
        </div>
      
    </div>
    </div>
    </>
  )
}

export default Checkstatus
