import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RangeBars = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/findall');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching admin profile:', error);
      }
    };

    fetchData();
  }, []);

  const renderBar = (percentage, label) => (
    <div>
      <div className='bar-label' >{label}:</div>
      <div className='progressstyle'>
      <div className='bar-container'>
        <div className='bar-fill' style={{ width: `${percentage}%`, color: 'white' }}></div>
      </div>
      <div style={{color:'white' ,fontSize:'20px'}}>{percentage}%</div>
      </div>
     
    </div>
  );

  return (
    <div className='display'>
      {data.percentageall && (
        <div>
          {renderBar(data.percentageall.percentageoftdp,'tdp')}
          {renderBar(data.percentageall.percentageofycp, 'YCP')}
          {renderBar(data.percentageall.percentageofbjp, 'BJP')}
          {renderBar(data.percentageall.percentageofjanasena, 'Janasena')}
          {renderBar(data.percentageall.percentageofprajasanti, 'Prajasanti')}
        </div>
      )}
    </div>
  );
};

export default RangeBars;
