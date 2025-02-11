import React from 'react';
import { Container, Typography, Box, IconButton, Link, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Estressado = () => {
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
                    Estressado(a)
                </Typography>
            </div>

            <Container maxWidth="md" sx={{ marginTop: '20px' }}>
                <Typography variant="body1" align="center" paragraph sx={{ fontSize: '17px' }}>
                    O estresse pode ser esmagador às vezes, mas é importante lembrar que ele não dura para sempre. Tire um momento para respirar e se reconectar com você mesmo(a).
                    O que está te sobrecarregando agora pode parecer gigante, mas você é capaz de lidar com isso, um passo de cada vez.
                    Não se pressione tanto para resolver tudo de uma vez.
                </Typography>
                <Typography variant="body1" align="center" paragraph sx={{ fontSize: '17px' }}>
                    Permita-se pausar, relaxar e, se possível, buscar uma atividade que te traga leveza. O estresse faz parte da vida, mas ele também passa, assim como as nuvens que cobrem o céu em um dia tempestuoso.
                    Cuide de si, seu bem-estar é a prioridade.
                </Typography>

                {/* Vídeos do YouTube */}
                <Box display="flex" flexDirection="column" alignItems="center" mt={4} gap={4}>

                    <Card sx={{ width: '100%', maxWidth: 600 }}>
                        <CardContent>
                            <Box sx={{ marginTop: 2 }}>
                                <iframe
                                    width="100%"
                                    height="200"
                                    src="https://www.youtube.com/embed/nnMaBBP3rEk"
                                    title="Vídeo sobre estresse"
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
                                    href="https://www.youtube.com/watch?v=nnMaBBP3rEk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    underline="always"
                                >
                                    LIMPAR RAIVA E DISSOLVER STRESS - Frequência Binaural Alpha 10hz
                                </Link>
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{ width: '100%', maxWidth: 600 }}>
                        <CardContent>
                            <Box sx={{ marginTop: 2 }}>
                                <iframe
                                    width="100%"
                                    height="200"
                                    src="https://www.youtube.com/embed/zpQOCJVuF50"
                                    title="Vídeo sobre estresse"
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
                                    href="https://www.youtube.com/watch?v=zpQOCJVuF50"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    underline="always"
                                >
                                    COMO ALIVIAR O ESTRESSE DO DIA A DIA
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

export default Estressado;
