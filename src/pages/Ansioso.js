import React from 'react';
import { Container, Typography, Box, IconButton, Link, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Ansioso = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/dashboard');
  };

  return (
    <>
      <div style={{
        width: '100%',
        backgroundColor: '#003366',
        color: 'white',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
      }}>
        <IconButton onClick={handleBack} style={{ color: 'white' }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h5" align="center"
          style={{
            flexGrow: 1,
            textAlign: 'center',
            paddingRight: '10%',
            paddingTop: '8px',
            fontSize: '33px',
            fontFamily: 'Saturday'
          }}>
          Ansioso(a)
        </Typography>
      </div>

      <Container maxWidth="md" sx={{ marginTop: '20px' }}>
        <Typography variant="body1" align="center" paragraph sx={{ fontSize: '17px' }}>
          Respire fundo. Lembre-se de que você está no controle do que sente, mesmo quando parece que as coisas estão fora de controle.
          A ansiedade pode ser avassaladora, mas ela não define quem você é. Este momento de incerteza vai passar. Tente focar no agora, no que está ao seu alcance neste instante.
          Não se cobre tanto pelo futuro, nem pelos detalhes que você ainda não resolveu.
        </Typography>

        <Typography variant="body1" align="center" paragraph sx={{ fontSize: '17px' }}>
          Permita-se sentir, mas também permita-se relaxar. Você é mais forte do que imagina, e está fazendo o melhor que pode. Se precisar, dê uma pausa. 
          Você merece momentos de paz e equilíbrio. Tudo vai se ajustar com o tempo, e você vai sair dessa situação mais forte e resiliente.
        </Typography>

        {/* vídeo do YouTube */}
        <Box display="flex" flexDirection="column" alignItems="center" mt={4} gap={4}>
          {/* Primeiro vídeo */}
          <Card sx={{ width: '100%', maxWidth: 600 }}>
            <CardContent>
              <Box sx={{ marginTop: 2 }}>
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/AMu9YYKB3YU"
                  title="OUÇA QUANDO ESTIVER NUMA CRISE DE ANSIEDADE"
                  style={{ border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Box>
              <Typography
                variant="caption"
                align="center"
                sx={{ marginTop: '15px', fontWeight: 'bold', display: 'block' }}
              >
                <Link
                  href="https://www.youtube.com/embed/AMu9YYKB3YU"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="always"
                >
                  OUÇA QUANDO ESTIVER NUMA CRISE DE ANSIEDADE
                </Link>
              </Typography>
            </CardContent>
          </Card>

          {/* Segundo vídeo */}
          <Card sx={{ width: '100%', maxWidth: 600 }}>
            <CardContent>
              <Box sx={{ marginTop: 2 }}>
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/1fYt92gSJ_U"
                  title="MINDFULNESS: ANSIEDADE ZERO (MEDITAÇÃO GUIADA)"
                  style={{ border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Box>
              <Typography
                variant="caption"
                align="center"
                sx={{ marginTop: '15px', fontWeight: 'bold', display: 'block' }}
              >
                <Link
                  href="https://www.youtube.com/embed/1fYt92gSJ_U"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="always"
                >
                  MINDFULNESS: ANSIEDADE ZERO (MEDITAÇÃO GUIADA)
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Footer */}
        <Box mt={8} textAlign="center">
          <Typography variant="body2" color="textSecondary" sx={{ fontFamily: 'Saturday' }}>
            PsiCuida
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Ansioso;
