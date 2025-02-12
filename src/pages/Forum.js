import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, List, ListItemButton, ListItemText, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Obtém a URL base da API a partir das variáveis de ambiente
const apiUrl = process.env.REACT_APP_API_BASE_URL;

const Forum = () => {
    const [perguntas, setPerguntas] = useState([]);
    const [open, setOpen] = useState(false);
    const [novaPergunta, setNovaPergunta] = useState({ titulo: '', descricao: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const pacienteId = useSelector((state) => state.user.userId);
    const navigate = useNavigate();

    useEffect(() => {
        // Buscar perguntas da API para todos os pacientes
        const fetchPerguntas = async () => {
            try {
                const response = await fetch(`${apiUrl}/perguntas/listarTodos`);
                if (!response.ok) throw new Error('Erro ao carregar perguntas');
                const data = await response.json();
                setPerguntas(data);
                setLoading(false);
            } catch (error) {
                setError('Erro ao carregar perguntas');
                setLoading(false);
                console.error(error);
            }
        };

        fetchPerguntas();
    }, [pacienteId]);

    const handleDialogOpen = () => setOpen(true);
    const handleDialogClose = () => setOpen(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNovaPergunta(prevState => ({ ...prevState, [name]: value }));
    };

    const handleAddPergunta = () => {
        axios.post(`${apiUrl}/perguntas`, { ...novaPergunta, pacienteId })
            .then(response => {
                setPerguntas([...perguntas, response.data]);
                setNovaPergunta({ titulo: '', descricao: '' });
                handleDialogClose();
            })
            .catch(error => {
                setError('Erro ao adicionar pergunta');
                console.error(error);
            });
    };

    const handlePerguntaClick = (id) => {
        navigate(`/perguntas/${id}`);
    };

    if (loading) {
        return <Typography>Carregando...</Typography>;
    }

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    return (
        <Container>
            <List>
                {perguntas.map((pergunta) => (
                    <ListItemButton key={pergunta.id} onClick={() => handlePerguntaClick(pergunta.id)}>
                        <ListItemText
                            primary={pergunta.titulo}
                            secondary={`${pergunta.respostas.length} respostas`}
                            sx={{
                                textDecoration: 'underline',
                                color: '#47b0e5',
                                cursor: 'pointer'
                            }}
                        />
                    </ListItemButton>
                ))}
            </List>

            <Button variant="contained" color="primary" fullWidth onClick={handleDialogOpen} sx={{ marginTop: 8, backgroundColor: '#003366', textTransform: 'none', fontSize: '17px' }}>
                + Novo tópico</Button>
            <Dialog open={open} onClose={handleDialogClose}>
                <DialogTitle>Nova Pergunta</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="titulo"
                        label="Título"
                        fullWidth
                        value={novaPergunta.titulo}
                        onChange={handleInputChange}
                    />
                    <TextField
                        margin="dense"
                        name="descricao"
                        label="Descrição da pergunta"
                        fullWidth
                        multiline
                        rows={4}
                        value={novaPergunta.descricao}
                        onChange={handleInputChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="secondary">Cancelar</Button>
                    <Button onClick={handleAddPergunta} color="primary">Adicionar</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default Forum;
