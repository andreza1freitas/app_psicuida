import React from 'react';
import { Container, Typography, Box, IconButton, Link, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Inseguro = () => {
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
                    Inseguro(a)
                </Typography>
            </div>

            <Container maxWidth="md" sx={{ marginTop: '20px' }}>
                <Typography variant="body1" align="center" paragraph sx={{ fontSize: '17px' }}>
                    Sei que, às vezes, é difícil acreditar em si mesmo, especialmente quando a insegurança toma conta. 
                    Mas lembre-se de que cada um de nós tem algo único e especial a oferecer ao mundo, e você não é diferente. 
                    Suas qualidades e habilidades são valiosas, mesmo que você nem sempre consiga enxergar isso.
                </Typography>
                <Typography variant="body1" align="center" paragraph sx={{ fontSize: '17px' }}>
                    É normal ter dúvidas e questionar as próprias capacidades, mas essas sensações não definem quem você é. 
                    Você é mais forte do que pensa e mais capaz do que imagina. Olhe para tudo o que você já superou até agora – 
                    cada obstáculo vencido mostra que você pode ir ainda mais longe.
                </Typography>
                <Typography variant="body1" align="center" paragraph sx={{ fontSize: '17px' }}>
                    Se permita ser gentil consigo mesmo(a), dar um passo de cada vez e não se cobrar tanto. 
                    A jornada é tão importante quanto o destino. E, acima de tudo, saiba que você não está sozinho(a) nessa caminhada.
                </Typography>

                {/* Vídeo do YouTube */}
                <Box display="flex" flexDirection="column" alignItems="center" mt={4} gap={4}>
                    <Card sx={{ width: '100%', maxWidth: 600 }}>
                        <CardContent>
                            <Box sx={{ marginTop: 2 }}>
                                <iframe
                                    width="100%"
                                    height="200"
                                    src="https://www.youtube.com/embed/gThsJ_rwWBw"
                                    title="Vídeo sobre insegurança"
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
                                    href="https://www.youtube.com/watch?v=gThsJ_rwWBw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    underline="always"
                                >
                                    COMO LIDAR COM A INSEGURANÇA
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

export default Inseguro;
