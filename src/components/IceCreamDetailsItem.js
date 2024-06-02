import React, { useState } from 'react';
import { CardContent, Typography, Button, Box, TextField, IconButton, CardMedia, Divider, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const IceCreamDetailsItem = ({ iceCream, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(iceCream.name);
  const [price, setPrice] = useState(iceCream.price);
  const [category, setCategory] = useState(iceCream.category.name);

  const handleUpdate = () => {
    const updatedIceCream = {
      ...iceCream,
      name: name,
      price: parseFloat(price),
      category: {
        name: category
      }
    };

    axios.put(`/api/icecreams/${iceCream.id}`, updatedIceCream)
      .then(response => {
        onUpdate(response.data);
        setIsEditing(false);
      })
      .catch(error => {
        console.error('There was an error updating the ice cream!', error);
      });
  };

  const handleDelete = () => {
    axios.delete(`/api/icecreams/${iceCream.id}`)
      .then(response => {
        onDelete(iceCream.id);
      })
      .catch(error => {
        console.error('There was an error deleting the ice cream!', error);
      });
  };

  return (
    <Paper elevation={3} sx={{ mb: 2, borderRadius: 2, overflow: 'hidden', border: '1px solid #8a2be2' }}>
      <Box display="flex" alignItems="center">
        {iceCream.imageUrl && (
          <CardMedia
            component="img"
            height="250"
            image={iceCream.imageUrl}
            alt={iceCream.name}
            sx={{ width: 340, objectFit: 'cover' }}
          />
        )}
        <CardContent sx={{ flex: 1 }}>
          {isEditing ? (
            <Box>
              <Box display="flex" alignItems="center" mb={2}>
                <TextField
                  label="Название"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                  sx={{ 
                    mr: 2,
                    '& .MuiOutlinedInput-root': { 
                      borderRadius: '8px', 
                      borderColor: '#8a2be2',
                      '&.Mui-focused fieldset': {
                        borderColor: '#8a2be2',
                      },
                      '& input': {
                        color: '#8a2be2'
                      }
                    },
                    '& .MuiInputLabel-root': { 
                      color: '#8a2be2',
                      '&.Mui-focused': {
                        color: '#8a2be2',
                      }
                    }
                  }}
                />
                <Button variant="contained" onClick={handleUpdate} sx={{ mr: 1, backgroundColor: '#8a2be2', color: 'white', '&:hover': { backgroundColor: '#7b1fa2' } }}>
                  Сохранить
                </Button>
                <Button variant="outlined" onClick={() => setIsEditing(false)} sx={{ color: '#8a2be2', borderColor: '#8a2be2', '&:hover': { borderColor: '#7b1fa2', color: '#7b1fa2' } }}>
                  Отмена
                </Button>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <TextField
                  label="Цена"
                  variant="outlined"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  fullWidth
                  sx={{ 
                    mr: 2,
                    '& .MuiOutlinedInput-root': { 
                      borderRadius: '8px', 
                      borderColor: '#8a2be2',
                      '&.Mui-focused fieldset': {
                        borderColor: '#8a2be2',
                      },
                      '& input': {
                        color: '#8a2be2'
                      }
                    },
                    '& .MuiInputLabel-root': { 
                      color: '#8a2be2',
                      '&.Mui-focused': {
                        color: '#8a2be2',
                      }
                    }
                  }}
                />
              </Box>
              <Box display="flex" alignItems="center">
                <TextField
                  label="Состав"
                  variant="outlined"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  fullWidth
                  sx={{ 
                    mr: 2,
                    '& .MuiOutlinedInput-root': { 
                      borderRadius: '8px', 
                      borderColor: '#8a2be2',
                      '&.Mui-focused fieldset': {
                        borderColor: '#8a2be2',
                      },
                      '& input': {
                        color: '#8a2be2'
                      }
                    },
                    '& .MuiInputLabel-root': { 
                      color: '#8a2be2',
                      '&.Mui-focused': {
                        color: '#8a2be2',
                      }
                    }
                  }}
                />
              </Box>
            </Box>
          ) : (
            <Box>
              <Box display="flex" alignItems="center" mb={2}>
                <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 'bold', color: '#8a2be2' }}>{iceCream.name}</Typography>
                <Button variant="contained" onClick={() => setIsEditing(true)} sx={{ mr: 1, backgroundColor: '#8a2be2', color: 'white', '&:hover': { backgroundColor: '#7b1fa2' } }}>
                  Изменить
                </Button>
                <IconButton aria-label="delete" onClick={handleDelete} sx={{ color: '#8a2be2', '&:hover': { color: '#7b1fa2' } }}>
                  <DeleteIcon />
                </IconButton>
              </Box>
              <Divider sx={{ borderColor: '#8a2be2' }} />
              <Box display="flex" alignItems="center" my={2}>
                <Typography variant="body1" sx={{ flexGrow: 1, fontSize: '1.2rem', color: '#8a2be2' }}>Цена: {iceCream.price} тг.</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Typography variant="body1" sx={{ flexGrow: 1, fontSize: '1.2rem', color: '#8a2be2' }}>Состав: {iceCream.category.name}</Typography>
              </Box>
            </Box>
          )}
        </CardContent>
      </Box>
    </Paper>
  );
};

export default IceCreamDetailsItem;
