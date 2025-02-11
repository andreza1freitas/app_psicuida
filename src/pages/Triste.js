import React from 'react';
import { Container, Typography, Box, IconButton, Card, CardContent, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Triste = () => {
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
                    Triste
                </Typography>
            </div>

            {/* Conteúdo principal */}
            <Container maxWidth="md" sx={{ marginTop: '20px' }}>
                <Typography variant="body1" align="center" paragraph sx={{ fontSize: '17px' }}>
                    Eu sei que agora pode parecer que a tristeza é pesada demais para suportar, que os dias parecem longos e as noites ainda mais.
                    Mas saiba que esse sentimento, por mais forte que seja, é passageiro.
                    Assim como as nuvens que cobrem o céu em um dia nublado, a tristeza também irá passar, e logo o sol voltará a brilhar.
                </Typography>
                <Typography variant="body1" align="center" paragraph sx={{ fontSize: '17px' }}>
                    Permita-se sentir o que está sentindo. É importante reconhecer sua dor, mas também lembre-se de que você é mais forte do que imagina. 
                    Dentro de você existe uma força que talvez você ainda não tenha percebido, mas que já te ajudou a superar tantos momentos difíceis.
                </Typography>
                <Typography variant="body1" align="center" paragraph sx={{ fontSize: '17px' }}>
                Cada dia é uma nova chance de recomeçar, e você merece viver todos eles. Não tenha pressa, vá no seu ritmo, mas acredite que dias melhores estão à sua espera. 
                Cuide de si mesmo(a), com carinho e paciência. E lembre-se: é ok não estar bem o tempo todo, mas nunca se esqueça que você é capaz de se levantar, sempre.
                </Typography>
                <Typography variant="h6" align="center" sx={{ marginTop: '20px', fontWeight: 'bold' }}>
                    Eu acredito em você!
                </Typography>

                {/* Card com vídeo do YouTube */}
                <Box display="flex" justifyContent="center" mt={4}>
                    <Card sx={{ width: '100%', maxWidth: 600 }}>
                        <CardContent>
                            <iframe
                                width="100%"
                                height="200"
                                src="https://www.youtube.com/embed/78WrEh__qKA"
                                title="Está Triste? Mensagem de Conforto Fé e Esperança"
                                style={{ border: 'none' }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>

                            <Typography
                                variant="caption"
                                align="center"
                                sx={{
                                    marginTop: '15px',
                                    fontWeight: 'bold',
                                    display: 'block',
                                    fontSize: '12px'
                                }}
                            >
                                <Link
                                    href="https://www.youtube.com/embed/78WrEh__qKA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    underline="always"
                                    color="primary"
                                >
                                    ESTÁ TRISTE? MENSAGEM DE CONFORTO, FÉ E ESPERANÇA
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

export default Triste;
