import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#8a2be2', color: 'white', py: 2, position: 'fixed', bottom: 0, width: '100%', textAlign: 'center' }}>
      <Typography variant="body1">&copy; 2024 Icicle. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
