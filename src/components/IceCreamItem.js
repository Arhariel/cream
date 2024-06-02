import React from 'react';
import { CardContent, Typography, IconButton, Box, CardMedia, Divider, Paper } from '@mui/material';
import { Paid } from '@mui/icons-material';

const IceCreamItem = ({ iceCream, onOrder }) => {
  return (
    <Paper elevation={3} sx={{ mb: 2, borderRadius: 2, overflow: 'hidden', border: '1px solid #8a2be2' }}>
      <Box display="flex" alignItems="center">
        {iceCream.imageUrl && (
          <CardMedia
            component="img"
            height="280"
            image={iceCream.imageUrl}
            alt={iceCream.name}
            sx={{ width: 500, objectFit: 'cover' }}
          />
        )}
        <CardContent sx={{ flex: 1 }}>
          <Box display="flex" alignItems="center" mb={2}>
            <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 'bold', color: '#8a2be2' }}>{iceCream.name}</Typography>
            <IconButton color="success" onClick={() => onOrder(iceCream)}>
              <Paid />
            </IconButton>
          </Box>
          <Divider sx={{ borderColor: '#8a2be2' }} />
          <Box display="flex" alignItems="center" my={2}>
            <Typography variant="body1" sx={{ flexGrow: 1, fontSize: '1.2rem', color: '#8a2be2' }}>Цена: {iceCream.price} тг.</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Typography variant="body1" sx={{ flexGrow: 1, fontSize: '1.2rem', color: '#8a2be2' }}>Состав: {iceCream.category.name}</Typography>
          </Box>
        </CardContent>
      </Box>
    </Paper>
  );
};

export default IceCreamItem;
