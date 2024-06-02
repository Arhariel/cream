import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IceCreamItem from './IceCreamItem';
import { Snackbar, Alert, Typography, Box } from '@mui/material';

const IceCreamList = () => {
  const [iceCreams, setIceCreams] = useState([]);
  const [orderMessage, setOrderMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    axios.get('/api/icecreams')
      .then(response => {
        setIceCreams(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the ice creams!', error);
      });
  }, []);

  const handleOrder = (iceCream) => {
    setOrderMessage(`Ваш заказ (${iceCream.name}, ${iceCream.category.name}, $${iceCream.price}) принят, мы сообщим Вам когда он будет готов`);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box sx={{ py: 4, px: 2 }}>
      <Box
        sx={{
          mb: 4,
          py: 2,
          textAlign: 'center',
          backgroundColor: '#8a2be2',
          color: 'white',
          borderRadius: 2,
          boxShadow: 3,
          backgroundPosition: 'center',
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          Витрина
        </Typography>
      </Box>
      <Box>
        {iceCreams.map(iceCream => (
          <IceCreamItem key={iceCream.id} iceCream={iceCream} onOrder={handleOrder} />
        ))}
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {orderMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default IceCreamList;
