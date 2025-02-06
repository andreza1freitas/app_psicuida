import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                maxWidth: '100%',
                backgroundColor: 'ffffff'
            }}

        >
            <Container maxWidth="lg">
                {/* Título com imagem */}
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ marginBottom: '80px' }}
                >
                    <Typography
                        variant="h3"
                        align="center"
                        sx={{ color: '#003366', fontFamily: 'Saturday' }}
                    >
                        PsiCuida
                    </Typography>
                    <img
                        src="/assets/img/logo.webp"
                        alt="Logo PsiCuida"
                        style={{
                            width: '50px',
                            height: '50px',
                            marginLeft: '-10px',
                            marginTop: '-60px'
                        }}
                    />
                </Box>
                <Button
                    variant="contained"
                    fullWidth
                    onClick={() => navigate('/login')}
                    sx={{
                        textTransform: 'none',
                        marginBottom: '16px',
                        backgroundColor: '#003366',
                        color: 'white',
                        fontSize: '17px',
                        width: '100%',
                        height: '50px'
                    }}
                >
                    Entrar
                </Button>
                <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => navigate('/cadastro')}
                    sx={{
                        textTransform: 'none',
                        color: '#003366',
                        borderColor: '003366',
                        fontSize: '17px',
                        width: '100%',
                        height: '50px'
                    }}
                >
                    Cadastre-se
                </Button>
            </Container>
        </Container>
    );
}

export default Home;
