import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box} from '@mui/material';
import IceCreamDetailsItem from '../components/IceCreamDetailsItem';

const IceCreamDetails = () => {
  const [iceCreams, setIceCreams] = useState([]);

  useEffect(() => {
    axios.get('/api/icecreams')
      .then(response => {
        setIceCreams(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the ice creams!', error);
      });
  }, []);

  const handleUpdate = (updatedIceCream) => {
    setIceCreams(prevIceCreams => prevIceCreams.map(iceCream => 
      iceCream.id === updatedIceCream.id ? updatedIceCream : iceCream
    ));
  };

  const handleDelete = (deletedId) => {
    setIceCreams(prevIceCreams => prevIceCreams.filter(iceCream => iceCream.id !== deletedId));
  };

  return (
    <Box sx={{ mt: 3 }}>
      
      {iceCreams.map(iceCream => (
        <IceCreamDetailsItem 
          key={iceCream.id} 
          iceCream={iceCream} 
          onUpdate={handleUpdate} 
          onDelete={handleDelete} 
        />
      ))}
    </Box>
  );
};

export default IceCreamDetails;
