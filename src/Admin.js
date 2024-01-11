import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Admin = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = data;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(data);
      const response = await axios.post('http://localhost:8000/admin', data);
      console.log(response.data);

      // navigate('/Adminlogin');
      navigate("/RangeBars");
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <>
    <div className='adminlogin'>
      <div className='adminlogin1'>
   
      <form onSubmit={handleSubmit}>
      <input className='admininput'
          type="email"
          name="email" 
          placeholder='email'
          value={email}
          onChange={handleChange}
         
        />

        <br />
        <br />
        <input
          type="password"
          name="password" className='admininput'
          value={password}
          onChange={handleChange}
          placeholder="Password"
        />
        <br />
        <br />
        <input type="submit" id="adminlogin" value="Login" />
      </form>
      </div>
    </div>
    
   
    </>
  );
};

export default Admin;
 
    
  