import React, { Component } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Grid, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

class AddIceCream extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      category: '',
      image: null
    };
  }

  ingredients = {
    основа: ['Молоко', 'Сливки', 'Йогурт'],
    ягоды: ['Клубника', 'Малина', 'Черника', 'Голубика'],
    шоколад: ['Молочный шоколад', 'Темный шоколад', 'Белый шоколад'],
    орехи: ['Грецкие орехи', 'Миндаль', 'Фундук', 'Фисташки'],
    вафли: ['Вафельные рожки', 'Вафельные трубочки'],
    посыпка: ['Шоколадная крошка', 'Цветная посыпка', 'Ореховая крошка'],
    сироп: ['Карамельный сироп', 'Шоколадный сироп', 'Кленовый сироп'],
    разное: ['Мед', 'Маршмеллоу', 'M&Ms']
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    let imageUrl = '';
    if (this.state.image) {
      const formData = new FormData();
      formData.append('image', this.state.image);
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      imageUrl = response.data.imageUrl;
    }

    const newIceCream = {
      name: this.state.name,
      price: parseFloat(this.state.price),
      category: {
        name: this.state.category
      },
      imageUrl
    };

    axios.post('/api/icecreams', newIceCream)
      .then(response => {
        console.log('Ice cream added:', response.data);
        this.setState({ name: '', price: '', category: '', image: null });
      })
      .catch(error => {
        console.error('There was an error adding the ice cream!', error);
      });
  };

  handleImageChange = (event) => {
    this.setState({ image: event.target.files[0] });
  };

  handleAddIngredient = (ingredient) => {
    this.setState((prevState) => ({
      category: prevState.category ? `${prevState.category}, ${ingredient}` : ingredient
    }));
  };

  render() {
    return (
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom sx={{ color: '#8a2be2' }}>Добавить новинку</Typography>
            <Box component="form" onSubmit={this.handleSubmit} sx={{ '& .MuiTextField-root': { mb: 2, width: '100%' }, textAlign: 'center' }}>
              <TextField
                label="Название"
                variant="outlined"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
                required
                sx={{
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
              <TextField
                label="Цена"
                variant="outlined"
                type="number"
                value={this.state.price}
                onChange={(e) => this.setState({ price: e.target.value })}
                required
                sx={{
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
              <TextField
                label="Состав"
                variant="outlined"
                value={this.state.category}
                onChange={(e) => this.setState({ category: e.target.value })}
                required
                sx={{
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
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Button
                  variant="outlined"
                  component="label"
                  sx={{
                    color: '#8a2be2',
                    borderColor: '#8a2be2',
                    '&:hover': {
                      borderColor: '#7b1fa2',
                      color: '#7b1fa2',
                      backgroundColor: 'transparent', 
                    },
                  }}
                >
                  Загрузить изображение
                  <input
                    type="file"
                    hidden
                    onChange={this.handleImageChange}
                  />
                </Button>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ backgroundColor: '#8a2be2', color: 'white', '&:hover': { backgroundColor: '#7b1fa2' } }}
                >
                  Добавить новинку
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom sx={{ color: '#8a2be2' }}>Ингредиенты</Typography>
            {Object.entries(this.ingredients).map(([category, items]) => (
              <Accordion key={category} sx={{ border: '1px solid #8a2be2', borderRadius: 1, mb: 2 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6" sx={{ color: '#8a2be2' }}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {items.map((item) => (
                      <Button
                        key={item}
                        variant="outlined"
                        onClick={() => this.handleAddIngredient(item)}
                        sx={{ borderColor: '#8a2be2', color: '#8a2be2' }}
                      >
                        {item}
                      </Button>
                    ))}
                  </Box>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default AddIceCream;
