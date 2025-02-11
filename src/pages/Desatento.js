import React from 'react';
import { Container, Typography, Box, IconButton, Link, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Desatento = () => {
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
                    Desatento(a)
                </Typography>
            </div>

            <Container maxWidth="md" sx={{ marginTop: '20px' }}>
                <Typography variant="body1" align="center" paragraph sx={{ fontSize: '17px' }}>
                    A distração pode acontecer com qualquer pessoa, especialmente em momentos de pressão ou quando a mente está sobrecarregada.
                    Mas lembre-se, você tem a capacidade de focar e alcançar tudo o que deseja. Às vezes, tudo o que é preciso é uma pequena pausa para reorganizar os pensamentos e voltar ao caminho com mais clareza.
                </Typography>
                <Typography variant="body1" align="center" paragraph sx={{ fontSize: '17px' }}>
                    Respire fundo, reorganize suas prioridades e volte ao presente. A cada momento que você se concentra, você se aproxima de seus objetivos.
                    Não se culpe por perder o foco de vez em quando, isso faz parte da jornada. O importante é como você se recupera e avança. Você é capaz de conquistar grandes coisas, um passo de cada vez!
                </Typography>

                {/* Vídeo do YouTube */}
                <Box display="flex" flexDirection="column" alignItems="center" mt={4} gap={4}>
                    <Card sx={{ width: '100%', maxWidth: 600 }}>
                        <CardContent>
                            <Box sx={{ marginTop: 2 }}>
                                <iframe
                                    width="100%"
                                    height="200"
                                    src="https://www.youtube.com/embed/nY8_Wt7LuF8"
                                    title="Vídeo sobre desatenção"
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
                                    href="https://www.youtube.com/watch?v=nY8_Wt7LuF8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    underline="always"
                                >
                                    TENHA OBJETIVOS CLAROS | Mantenha a disciplina e o foco no processo | Mente Forte
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

export default Desatento;
