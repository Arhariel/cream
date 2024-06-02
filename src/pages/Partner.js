// Partner.js
import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, TextField, Button } from '@mui/material';
import franchise from './franchise.jpg';
import support from './support.jpg';
import benefits from './benefits.jpg';

const Partner = () => {
  return (
    <Container style={{ marginBottom: '100px' }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ color: '#8a2be2' }}>
        Стать партнером
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image={franchise}
              alt="Франшизы"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#8a2be2' }}>
              Франшизы Ice Cream Shop
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Мы предлагаем уникальные возможности для партнеров, желающих открыть свою собственную франшизу Ice Cream Shop. Наши франшизы - это проверенный бизнес-модель с высокой доходностью и устойчивым ростом.
            </Typography>
          </CardContent>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#8a2be2' }}>
              Условия и выгода
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Мы предоставляем выгодные условия для наших партнеров. Вложения в франшизу быстро окупаются благодаря нашему известному бренду и постоянному потоку клиентов. Мы предлагаем конкурентные цены на продукты и маркетинговую поддержку.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image={benefits}
              alt="Выгода"
            />
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image={support}
              alt="Поддержка"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#8a2be2' }}>
              Поддержка на всех этапах
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Мы предлагаем всестороннюю поддержку на всех этапах открытия и ведения бизнеса. Наши эксперты помогут вам с выбором местоположения, дизайном интерьера, обучением персонала и маркетингом.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>

      <Typography variant="h4" component="h2" gutterBottom style={{ marginTop: '40px', color: '#8a2be2' }}>
        Заполните форму, чтобы стать партнером
      </Typography>
      <Card style={{ padding: '20px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Имя" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Фамилия" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Email" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Телефон" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Сообщение" multiline rows={4} variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" sx={{ backgroundColor: '#8a2be2', color: 'white', '&:hover': { backgroundColor: '#7b1fa2' } }} fullWidth>
              Отправить
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default Partner;


