import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Typography, Button, TextField, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';

const RespostasForum = () => {
    const { id } = useParams();
    const [pergunta, setPergunta] = useState(null);
    const [respostas, setRespostas] = useState([]);
    const [novaResposta, setNovaResposta] = useState('');
    const [error, setError] = useState('');
    const [open, setOpen] = useState(false);
    const pacienteId = useSelector((state) => state.user.userId);
    const apiUrl = process.env.REACT_APP_API_BASE_URL;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPergunta = async () => {
            try {
                const response = await fetch(`${apiUrl}/perguntas/${id}`);
                if (!response.ok) throw new Error('Erro ao carregar a pergunta');
                const data = await response.json();
                setPergunta(data);
            } catch (error) {
                setError('Erro ao carregar a pergunta');
                console.error(error);
            }
        };

        const fetchRespostas = async () => {
            try {
                const response = await fetch(`${apiUrl}/perguntas/${id}/respostas`);
                if (!response.ok) throw new Error('Erro ao carregar as respostas');
                const data = await response.json();
                setRespostas(data);
            } catch (error) {
                setError('Erro ao carregar as respostas');
                console.error(error);
            }
        };

        fetchPergunta();
        fetchRespostas();
    }, [id, apiUrl]);

    const handleAddResposta = () => {
        axios.post(`${apiUrl}/respostas`, { conteudo: novaResposta, perguntaId: id, pacienteId })
            .then(response => {
                setRespostas([...respostas, response.data]);
                setNovaResposta('');
                handleDialogClose();
            })
            .catch(error => {
                setError('Erro ao adicionar resposta');
                console.error(error);
            });
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const utcDate = new Date(date.toUTCString().slice(0, -4));
        return utcDate.toLocaleDateString();
    };

    const handleDialogOpen = () => setOpen(true);
    const handleDialogClose = () => setOpen(false);

    const handleInputChange = (e) => {
        setNovaResposta(e.target.value);
    };

    const handleBack = () => {
        navigate('/forum');
    };

    return (
        <>
            <Box sx={{
                width: '100%',
                backgroundColor: '#003366',
                color: 'white',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                paddingX: 2,
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 1100
            }}>
                <IconButton onClick={handleBack} sx={{ color: 'white' }}>
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="h5" align="center" sx={{
                    flexGrow: 1,
                    textAlign: 'center',
                    paddingTop: '10px',
                    paddingRight: '10%',
                    fontSize: '32px',
                    fontFamily: 'Saturday',
                }}>
                    Fórum de Apoio
                </Typography>
            </Box>

            <Container maxWidth="md" sx={{ marginTop: '80px' }}>
                {pergunta ? (
                    <Box sx={{ padding: 2 }}>
                        {pergunta.descricao && (
                            <Box sx={{ marginBottom: '20px', padding: 2, backgroundColor: '#c4f9c0', borderRadius: '8px' }}>
                                <Typography variant="h6" gutterBottom>
                                    {pergunta.descricao}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" gutterBottom>
                                    <strong>Autor: Anônimo - Publicado em: {formatDate(pergunta.data)}</strong>
                                </Typography>
                            </Box>
                        )}

                        <Typography variant="h6" gutterBottom sx={{ marginBottom: '20px', fontFamily: 'Rubica', fontSize: '20px' }}>
                            Respostas
                        </Typography>

                        {respostas.map((resposta) => (
                            <Box key={resposta.id} sx={{
                                backgroundColor: '#f5f5f5',
                                padding: '15px',
                                borderRadius: '8px',
                                marginBottom: '15px',
                                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                                wordWrap: 'break-word',
                                whiteSpace: 'pre-wrap',
                            }}>
                                <Typography variant="body1">
                                    {resposta.conteudo}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" gutterBottom>
                                    <strong>Autor: Anônimo - Publicado em: {formatDate(resposta.data)}</strong>
                                </Typography>
                            </Box>
                        ))}

                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={handleDialogOpen}
                            sx={{
                                marginTop: '20px',
                                padding: '10px',
                                backgroundColor: '#003366',
                                textTransform: 'none',
                                fontSize: '16px',
                            }}
                        >
                            Responder
                        </Button>

                        <Dialog open={open} onClose={handleDialogClose} maxWidth="sm" fullWidth>
                            <DialogTitle>Responder</DialogTitle>
                            <DialogContent>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    label="Digite sua resposta"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    value={novaResposta}
                                    onChange={handleInputChange}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleDialogClose} color="secondary">Cancelar</Button>
                                <Button onClick={handleAddResposta} color="primary">Adicionar</Button>
                            </DialogActions>
                        </Dialog>

                        {error && <Typography color="error" sx={{ marginTop: '20px' }}>{error}</Typography>}
                    </Box>
                ) : (
                    <Typography>Carregando...</Typography>
                )}
            </Container>
        </>
    );
};

export default RespostasForum;
