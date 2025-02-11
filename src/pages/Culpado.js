import React from 'react';
import { Container, Typography, Box, IconButton, Link, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Culpado = () => {
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
                    Culpado(a)
                </Typography>
            </div>

            <Container maxWidth="md" sx={{ marginTop: '20px' }}>
                <Typography variant="body1" align="center" paragraph sx={{ fontSize: '17px' }}>
                    A culpa pode ser uma carga pesada, mas é importante lembrar que errar faz parte do ser humano.
                    O mais importante é reconhecer o que aconteceu, aprender com isso e seguir em frente. Todos nós cometemos erros, mas esses momentos não definem quem somos.
                    O que realmente importa é como você se levanta, como você decide mudar e crescer.
                </Typography>
                <Typography variant="body1" align="center" paragraph sx={{ fontSize: '17px' }}>
                    Seja gentil consigo mesmo(a). Perdoar-se é um ato de coragem e amor próprio. Você merece uma nova chance, assim como qualquer pessoa.
                    Não deixe que o peso da culpa te impeça de ver o quanto você ainda pode conquistar. Hoje é um novo dia, e cada passo que você dá é uma oportunidade para recomeçar.
                </Typography>

                {/* Vídeo do YouTube */}
                <Box display="flex" flexDirection="column" alignItems="center" mt={4} gap={4}>
                    <Card sx={{ width: '100%', maxWidth: 600 }}>
                        <CardContent>
                            <Box sx={{ marginTop: 2 }}>
                                <iframe
                                    width="100%"
                                    height="200"
                                    src="https://www.youtube.com/embed/D17roP3AOa4"
                                    title="Vídeo sobre culpa"
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
                                    href="https://www.youtube.com/watch?v=D17roP3AOa4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    underline="always"
                                >
                                    PARE DE SE SENTIR CULPADO - Poderoso Vídeo Motivacional
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

export default Culpado;
