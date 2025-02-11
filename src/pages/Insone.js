import React from 'react';
import { Container, Typography, Box, IconButton, Link, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Insone = () => {
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
                <Typography variant="h5" align="center" sx={{ flexGrow: 1, textAlign: 'center', paddingRight: '10%', paddingTop: '8px', fontSize: '33px', fontFamily: 'Saturday' }}>
                    Insônia
                </Typography>
            </div>

            <Container maxWidth="md" sx={{ mt: 3 }}>
                <Typography
                    variant="h5"
                    align="center"
                    paragraph
                    sx={{
                        fontWeight: 'bold', mb: 2,
                        fontFamily: 'Rubik',
                        color: '#003366'
                    }}
                >
                    Hora de Desligar
                </Typography>

                <Typography
                    variant="body1"
                    align="left"
                    paragraph
                    sx={{ fontSize: '17px', lineHeight: 1.6, fontWeight: 'bold' }}
                >
                    Dicas e princípios para dormir bem:
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', fontSize: '16px', alignItems: 'flex-start' }}>
                    {[
                        "Evite comer muito e ingerir cafeína à noite.",
                        "Se exponha à luz solar durante o dia e 'canse' o corpo. Evite trabalho, redes sociais, eletrônicos e luz forte por pelo menos duas horas antes de dormir.",
                        "Crie uma rotina para dormir, seguindo sempre o mesmo ritual.",
                        "Procure dormir e acordar no mesmo horário, com pouca variação nos dias de folga.",
                        "Alongamentos e um banho quente podem ajudar a relaxar o corpo.",
                        "Procure deixar o quarto escuro, sem distratores e sem ruídos, com cama e travesseiro confortáveis.",
                        "Chá de camomila, leite morno com mel, banana, aveia, cereja (ou suco de cereja), amêndoas e nozes são indutores naturais do sono.",
                        "Vá para cama só quando estiver com sono, mesmo que seja tarde (ou seja, não 'force o sono').",
                        "Não navegue no celular nem assista à TV no quarto, mas ler um livro na cama pode fazer parte da sua rotina para dormir.",
                        "Se acordar durante a noite e não conseguir dormir, saia da cama e só volte quando estiver com sono (mas não entre em redes sociais e jogos eletrônicos nesse período), pois é importante associar o quarto e a cama com sono, e não com estímulos."
                    ].map((dica, index) => (
                        <Typography
                            key={index}
                            variant="body1"
                            align="left"
                            sx={{ fontSize: '16px', lineHeight: 1.6, marginBottom: '10px', textAlign: 'justify' }}
                        >
                            {index + 1}. {dica}
                        </Typography>
                    ))}
                </Box>

                <Typography
                    variant="body1"
                    align="center"
                    paragraph
                    sx={{ fontSize: '16px', lineHeight: 1.6, marginTop: '20px' }}
                >
                    Além de seguir esses princípios, esse áudio também pode ajudar a pegar no sono e a dormir bem.&nbsp;
                    <strong>Para melhores resultados, ouça com fones de ouvido.</strong>
                </Typography>

                {/* Card com vídeo do YouTube */}
                <Box display="flex" justifyContent="center" mt={4}>
                    <Card sx={{ width: '100%', maxWidth: 600 }}>
                        <CardContent>
                            <iframe
                                width="100%"
                                height="200"
                                src="https://www.youtube.com/embed/wFJeTeeXicU"
                                title="MÚSICA PARA SONO PROFUNDO"
                                style={{ border: 'none' }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <Typography
                                variant="caption"
                                align="center"
                                sx={{ marginTop: '15px', fontWeight: 'bold', display: 'block' }}
                            >
                                <Link
                                    href="https://www.youtube.com/embed/wFJeTeeXicU"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    underline="always"
                                >
                                    MÚSICA PARA SONO PROFUNDO E CURA MILAGROSA 432Hz DORMIR RAPIDAMENTE E RELAXAMENTO PROFUNDO
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

export default Insone;
