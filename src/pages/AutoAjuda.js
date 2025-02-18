import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const videos = [
  {
    title: 'Exercício de respiração',
    description: 'Um exercício simples para ajudar a reduzir a ansiedade.',
    videoUrl: 'https://www.youtube.com/embed/Ghbhtri8em4',
  },
  {
    title: 'Técnica de relaxamento',
    description: 'Técnica de relaxamento para ajudar a aliviar o estresse.',
    videoUrl: 'https://www.youtube.com/embed/n8zb-rSgTBo',
  },
  {
    title: 'Meditações guiadas',
    description: 'Uma série de meditações guiadas para promover o bem-estar.',
    videoUrl: 'https://www.youtube.com/embed/?list=PLJrVwnnn3RFTD_tnHK1CdqtpLkge8j5H5',
  },
  {
    title: 'Mindfulness: Ansiedade Zero',
    description: 'Meditação guiada para reduzir a ansiedade.',
    videoUrl: 'https://www.youtube.com/embed/1fYt92gSJ_U',
    link: 'https://www.youtube.com/embed/1fYt92gSJ_U',
  }
];

const AutoAjuda = () => {
  return (
    <Box p={3} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      <Typography variant="h5" component="h2" gutterBottom sx={{ marginTop: 3, textAlign: 'center', color: '#003366', fontSize: '25px', fontFamily: 'Saturday' }}>
        Recursos
      </Typography>

      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        gap={3}
        sx={{
          width: '100%',
          maxWidth: '1200px', 
          padding: '0 16px', 
        }}
      >

      {videos.map((video, index) => (
          <Box key={index}>
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
    </Box>
  );
};

export default AutoAjuda;
