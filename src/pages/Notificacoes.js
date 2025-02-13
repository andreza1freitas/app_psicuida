import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';
import { Box, Switch } from '@mui/material';
import { useSelector } from 'react-redux';
import ScrollControl from '../components/ScrollControl';

const Notificacoes = () => {
    const navigate = useNavigate();
    const userId = useSelector((state) => state.user.userId);
    const [notificacoes, setNotificacoes] = useState({
        notificacao1: false,
        notificacao2: false,
        notificacao3: false,
    });

    useEffect(() => {
        const savedNotificacoes = JSON.parse(localStorage.getItem(`notificacoes_${userId}`));
        if (savedNotificacoes) {
            setNotificacoes(savedNotificacoes);
        }
    }, [userId]);

    const handleBack = () => {
        navigate('/configuracao');
    };

    const handleToggle = (key) => {
        setNotificacoes((prev) => {
            const updatedNotificacoes = { ...prev, [key]: !prev[key] };
            localStorage.setItem(`notificacoes_${userId}`, JSON.stringify(updatedNotificacoes));
            return updatedNotificacoes;
        });
    };

    return (
        <>
            <ScrollControl />
            <Box
                display="flex"
                flexDirection="column"
                // minHeight="100vh"
                height="100vh"
            >
                <Box
                    sx={{
                        width: '100%',
                        backgroundColor: '#003366',
                        color: 'white',
                        height: '60px',
                        display: 'flex',
                        alignItems: 'center',
                        paddingX: 2,
                    }}
                >
                    <IconButton onClick={handleBack} sx={{ color: 'white' }}>
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography
                        variant="h5"
                        sx={{
                            flexGrow: 1,
                            textAlign: 'center',
                            paddingRight: '10%',
                            paddingTop: '8px',
                            fontSize: '33px',
                            fontFamily: 'Saturday'
                        }}
                    >
                        Notificações
                    </Typography>
                </Box>

                <Box
                    padding={2}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    sx={{ marginTop: '4%'}}
                >
                    <Typography variant="h6" gutterBottom align="center"
                        sx={{
                            marginBottom: '60px',
                            textAlign: 'center',
                            color: '#003366',
                            fontSize: '28px',
                            fontWeight: 'bold',
                            fontFamily: 'Rubik'
                        }}
                    >
                        Escolha as notificações que deseja receber
                    </Typography>

                    <Box width="100%" maxWidth="400px">
                        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 2, fontWeight: 'bold' }}>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Agende sua Sessão</Typography>
                            <Switch
                                checked={!!notificacoes.notificacao1}
                                onChange={() => handleToggle('notificacao1')}
                            />
                        </Box>
                        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Lembrete Diário</Typography>
                            <Switch
                                checked={!!notificacoes.notificacao2}
                                onChange={() => handleToggle('notificacao2')}
                            />
                        </Box>
                        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Sessões Virtuais</Typography>
                            <Switch
                                checked={!!notificacoes.notificacao3}
                                onChange={() => handleToggle('notificacao3')}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Notificacoes;