// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const Adminlogin = () => {
//   const location = useLocation();
//   const { email } = location.state || { email: null }; 
//   const [data,setData]= useState([]);
//    useEffect(()=>{
//     axios.get('http://localhost:8000/adminprofile').then((response))
//    })

//   return (
//     <div>
//       {email}
//     </div>
//   );
// };

// export default Adminlogin;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Adminlogin = () => {
  const location = useLocation();
  const { email } = location.state || { email: null };
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/adminprofile');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching admin profile:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <p>Email: {email}</p>
      <p>Admin Profile Data: {JSON.stringify(data)}</p>
    </div>
  );
};

export default Adminlogin;

