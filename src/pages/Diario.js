import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, MenuItem, Snackbar, Alert, FormControl } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import format from 'date-fns/format';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useSelector } from 'react-redux';

const Diario = () => {

    const apiUrl = process.env.REACT_APP_API_BASE_URL;

    const [formData, setFormData] = useState({
        sentimento: '',
        fezBem: '',
        fezMal: '',
        licoesAprendidas: ''
    });
    const [data, setData] = useState(new Date());
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [diarioId, setDiarioId] = useState(null);

    const userId = useSelector((state) => state.user.userId); // Recupera o ID do usuário logado

    useEffect(() => {
        // Função para carregar o diário do dia selecionado
        const loadDiario = async (date) => {
            const formattedDate = format(date, 'yyyy-MM-dd');
            const response = await fetch(`${apiUrl}/diarios/data/${formattedDate}/paciente/${userId}`);
            if (response.ok) {
                const diario = await response.json();
                setFormData({
                    sentimento: diario.sentimento,
                    fezBem: diario.fezBem,
                    fezMal: diario.fezMal,
                    licoesAprendidas: diario.licoesAprendidas
                });
                setDiarioId(diario.id); // Armazena o ID do diário carregado
            } else {
                // Se não houver diário para a data, limpa o formulário
                setFormData({
                    sentimento: '',
                    fezBem: '',
                    fezMal: '',
                    licoesAprendidas: ''
                });
                // Reseta o ID se não houver diário
                setDiarioId(null);
            }
        };

        loadDiario(data);
    }, [data, userId, apiUrl]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestData = {
            ...formData,
            data: format(data, 'yyyy-MM-dd'),
            pacienteId: userId
        };

        // Se existir diarioId, usa PUT, caso contrário, usa POST
        const method = diarioId ? 'PUT' : 'POST';
        const url = diarioId
            ? `${apiUrl}/diarios/${diarioId}`
            : `${apiUrl}/diarios`;

        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData)
        }).then(response => {
            if (response.ok) {
                setOpenSnackbar(true);
            }
        });
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Container>
                <Typography gutterBottom align="center" style={{ paddingTop: 30, color: '#003366', fontSize: '33px', fontFamily: 'Saturday' }}>
                    Como foi seu dia?
                </Typography>
                <FormControl fullWidth margin="normal" required>
                    <DatePicker
                        fullWidth
                        format="dd/MM/yyyy"
                        label="Selecione a data"
                        value={data}
                        onChange={(newValue) => setData(newValue)}
                        slots={{ textField: TextField }}
                        slotProps={{ textField: { fullWidth: true, margin: "normal" } }}
                        openTo="day"
                        disableFuture
                        allowKeyboardControl
                    />
                </FormControl>
                <form onSubmit={handleSubmit}>
                    <TextField
                        select
                        label="Selecione"
                        name="sentimento"
                        value={formData.sentimento}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    >
                        <MenuItem value="">
                            <em>Selecione</em>
                        </MenuItem>
                        <MenuItem value="bom">Bom 😊</MenuItem>
                        <MenuItem value="otimo">Ótimo 😄 </MenuItem>
                        <MenuItem value="normal">Normal 😐</MenuItem>
                        <MenuItem value="ruim">Ruim 😟</MenuItem>
                        <MenuItem value="pessimo">Péssimo 😢</MenuItem>
                    </TextField>
                    <TextField
                        label="O que te fez bem?"
                        name="fezBem"
                        value={formData.fezBem}
                        onChange={handleChange}
                        fullWidth
                        multiline
                        rows={4}
                        margin="normal"
                    />
                    <TextField
                        label="O que te fez mal?"
                        name="fezMal"
                        value={formData.fezMal}
                        onChange={handleChange}
                        fullWidth
                        multiline
                        rows={4}
                        margin="normal"
                    />
                    <TextField
                        label="O que você aprendeu hoje?"
                        name="licoesAprendidas"
                        value={formData.licoesAprendidas}
                        onChange={handleChange}
                        fullWidth
                        multiline
                        rows={4}
                        margin="normal"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        style={{ marginTop: 10, backgroundColor: '#003366', textTransform: 'none', fontSize: '17px' }}
                    >
                        Registrar
                    </Button>
                </form>

                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={2000}
                    onClose={handleSnackbarClose}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
                        Diário salvo com sucesso!
                    </Alert>
                </Snackbar>
            </Container>
        </LocalizationProvider>
    );
}

export default Diario;
