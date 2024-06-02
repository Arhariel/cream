// About.js
import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import iceCreamFactory from './iceCreamFactory.jpg';
import globalPresence from './globalPresence.jpg';
import communitySupport from './communitySupport.jpg';

const About = () => {
  return (
    <Container style={{ marginBottom: '100px' }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ color: '#8a2be2' }}>
        О нас
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image={iceCreamFactory}
              alt="Фабрика мороженого"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#8a2be2' }}>
              Наша история
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Основанная в 1985 году, Icicle начиналась как небольшой семейный бизнес в сердце очаровательного города. Со временем наша страсть к созданию вкусных и инновационных вкусов мороженого побудила нас расширяться и делиться нашими угощениями с миром. Наш путь от местного магазина до международного бренда является свидетельством нашего стремления к качеству и удовлетворению клиентов.
            </Typography>
          </CardContent>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#8a2be2' }}>
              Международное присутствие
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Сегодня Icicle - это глобальная компания с магазинами в более чем 30 странах. Наше международное присутствие позволяет нам приносить радость миллионам любителей мороженого по всему миру. Мы гордимся тем, что являемся культурно инклюзивным брендом, отмечающим местные вкусы и сохраняя высокие стандарты качества и инноваций.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image={globalPresence}
              alt="Международное присутствие"
            />
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image={communitySupport}
              alt="Поддержка сообщества"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#8a2be2' }}>
              Создание рабочих мест и поддержка сообществ
            </Typography>
            <Typography variant="body1" color="textSecondary">
              В Icicle мы верим в возвращение сообществам, которым мы служим. Мы создали тысячи рабочих мест по всему миру, поддерживая местные экономики и укрепляя чувство общности. Наши инициативы включают устойчивое снабжение ингредиентами, поддержку местных фермеров и участие в различных благотворительных мероприятиях, чтобы оказывать положительное влияние на общество.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;