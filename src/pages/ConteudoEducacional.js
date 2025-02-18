import React from 'react';
import { Container, Typography, Card, CardContent, Button, Box, CardMedia } from '@mui/material';

const ConteudoEducacional = () => {
  const artigos = [
    {
      title: 'Saúde Mental e Bem-Estar',
      description: 'Dicas para cuidar da sua saúde mental.',
      image: '/assets/img/imagem-bem-estar.jpg',
    },
    {
      title: 'Histórias de Sucesso',
      description: 'Inspire-se com histórias de superação.',
      image: '/assets/img/imagem-sucesso.jpg',
    },
  ];

  const videos = [
    {
      title: 'CRIE Bons Hábitos e DESTRUA os Maus Hábitos',
      description: 'Descubra como criar bons hábitos e eliminar os maus hábitos que estão prejudicando sua vida.',
      videoUrl: 'https://www.youtube.com/embed/I_qGitEMumY',
    },
    {
      title: 'Saúde Mental',
      description: 'Sabia que existe um assunto no universo da saúde tão importante quanto a saúde física? Pois é, precisamos falar sobre saúde mental.',
      videoUrl: 'https://www.youtube.com/embed/UwyE_XIQ7DA'
    },
    {
      title: 'Como tratar a depressão sem utilizar remédios',
      description: 'Você sabia que Ansiedade e Depressão tem cura? Com o tratamento adequado, a grande maioria dos pacientes consegue eliminar os sintomas da Ansiedade e Depressão, sem o uso de medicamentos.',
      videoUrl: 'https://www.youtube.com/embed/kKhyunA1Qro',
    },
  ];

  return (
    <Container>

      <Typography variant="h6" component="h2" gutterBottom sx={{ marginTop: 3, textAlign: 'center', color: '#003366', fontSize: '25px', fontFamily: 'Saturday' }}>
        Artigos
      </Typography>

      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={3}>
        {artigos.map((artigo, index) => (
          <Box key={index} flexBasis={{ xs: '100%', sm: '48%', md: '30%' }} mb={4}>
            <Card>
              <CardMedia component="img" height="150" image={artigo.image} alt={artigo.title} />
              <CardContent>
                <Typography variant="h6" component="h3">
                  {artigo.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {artigo.description}
                </Typography>
                <Button href={artigo.link} variant="contained" sx={{ marginTop: 2, backgroundColor: '#003366' }}>
                  Ler mais
                </Button>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>

      <Typography variant="h6" component="h2" gutterBottom sx={{ marginTop: 3, textAlign: 'center', color: '#003366', fontSize: '25px', fontFamily: 'Saturday' }}>
        Vídeos Informativos
      </Typography>

      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={3}>
        {videos.map((video, index) => (
          <Box key={index} flexBasis={{ xs: '100%', sm: '48%', md: '30%' }} mb={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3">
                  {video.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {video.description}
                </Typography>
                <Box sx={{ marginTop: 2 }}>
                  <iframe
                    width="100%"
                    height="200"
                    src={video.videoUrl}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
      
    </Container>
  );
};

export default ConteudoEducacional;
