// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Home = () => {
//   const [data, setData] = useState({
//     name: '',
//     email: '',
//     adharnumber: '',
//     voterid: '',
//     phnnumber: '',
//   });

//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState(null);

//   const { name, email, adharnumber, voterid, phnnumber } = data;
//   const navigate = useNavigate();

//   const changeHandler = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const SubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       console.log(data);
//       const response = await axios.post('http://localhost:8000/apiuser/register', data);
//       console.log(response.data);
//       setResponse(response.data); // Save the response in state
//       navigate('/Login');
//     } catch (error) {
//       console.error('Error during registration:', error);
//       setError(error); // Save the error in state
//     }
//   };

//   // useEffect to make an initial API call (if needed)
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/someEndpoint');
//         console.log(response.data);
//         // Handle the response as needed
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         // Handle the error as needed
//       }
//     };

//     fetchData(); // Call the fetchData function when the component mounts
//   }, []); // Empty dependency array means this effect runs once after the initial render

//   return (
//     <>
//       <div className="head">
//         <div className="start">
//           <h1>Kindly register to vote</h1>
//           <form onSubmit={SubmitHandler}>
//               <label>name:</label> 
//               <input type ="text" name='name' value={name}  onChange={changeHandler} placeholder="enter u r name here"/><br/><br/>
//               <label>email:</label>
//               <input type ="email"  name='email'  value={email}  onChange={changeHandler} placeholder="enter u r email here"/><br/><br/>
//               <label>Adharcard number: </label>
//               <input type ="number"  name='adharnumber'   value={adharnumber} onChange={changeHandler} placeholder="enter u r adharcard number here"/><br/><br/>
//               <label>voter Id :</label>
//               <input type ="number"  name='voterid'  value={voterid} onChange={changeHandler} placeholder="enter u r voterId here"/><br/><br/>
//               <label>phn number:</label>
//               <input type ="number" name='phnnumber'   value={phnnumber} onChange={changeHandler} placeholder="enter u r number here"/><br/><br/>
//               <input type ="submit"  name="register" value="register"/>
       
//               </form>
          
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';



 
 
const Home = () => {
   const[data,setData]= useState({
    name:'',
    email:'',
    adharnumber:'',
    voterid:'',
    phnnumber:''


   })



   const {name,email,adharnumber,voterid,phnnumber}=data
  const navigate = useNavigate();
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  
  const SubmitHandler = async (e) => {
    e.preventDefault();
    try {
      console.log(data); 
  
     
      // if (phnnumber.length !== 10) {
      //  window.alert('Phone number must be 10 digits');
      //   return;
      // }
      // if (adharnumber.length !== 12) {
      //   alert('Aadhar number must be 12 digits');
      //   return;
      // }
  
      const response = await axios.post('http://localhost:8000/apiuser/register', data);
  
      console.log(response); 
  
      if (response.data.status === 0) {
        alert("Voter ID already exists");
        return;
      } else if (response.data.status === 1) {
        alert("Registration successful");
        navigate("/Login");
      } else {
        alert("Unexpected status code in the response");
      }
    } catch (error) {
      console.error('Error during registration:', error);
     
      alert("An error occurred during registration. check the voterid or adharnumber.");
    }
  };
  return (
    <>
      <div className='head'>
            <div className='start'>
            
            <em> <h1 className='registertag'>kindly register to vote</h1><br/></em> 
              <form onSubmit={SubmitHandler}>
              <label className='forming' >name:</label>
              <input type ="text"  className='inputs' name='name' value={name} autoFocus  required onChange={changeHandler} placeholder=" name "/><br/><br/>
              <label className='forming'>email:</label>
              <input type ="email" className='inputs' name='email'  value={email}   required onChange={changeHandler} placeholder="enter u r email here"/><br/><br/>
              <label  className='forming'>Adharcard number: </label>
              <input type ="number" className='inputs' name='adharnumber'   value={adharnumber} required onChange={changeHandler} placeholder="enter u r adharcard number here"/><br/><br/>
              <label className='forming' >voter Id :</label>
              <input type ="number" className='inputs' name='voterid'  value={voterid} required onChange={changeHandler} placeholder="enter u r voterId here"/><br/><br/>
              <label  className='forming'>phn number:</label>
              <input type ="number" className='inputs' name='phnnumber'  required value={phnnumber}onChange={changeHandler} placeholder="enter u r number here"/><br/><br/>
              <input type ="submit"  id="name" name="register" value="register"/>
 
       
              </form>
            
              
           
              </div>
      </div>
    </>
  )
}

export default Home