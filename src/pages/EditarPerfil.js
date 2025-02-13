import React, { useState, useEffect } from 'react';
import { Button, TextField, Container, Typography, MenuItem, Select, InputLabel, FormControl, IconButton, InputAdornment, Stack, Snackbar, Alert } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import InputMask from 'react-input-mask';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserName } from '../redux/userSlice';

const EditarPerfil = () => {
    const apiUrl = process.env.REACT_APP_API_BASE_URL;
    const navigate = useNavigate();
    const userId = useSelector((state) => state.user.userId);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        dataNascimento: null,
        genero: '',
        estadoCivil: '',
        tratamento: '',
        senha: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`${apiUrl}/pacientes/${userId}`);

                if (response.ok) {
                    const userData = await response.json();
                    setFormData({
                        nome: userData.nome || '',
                        email: userData.email || '',
                        telefone: userData.telefone || '',
                        dataNascimento: userData.dataNascimento ? dayjs(userData.dataNascimento) : null,
                        genero: userData.genero || '',
                        estadoCivil: userData.estadoCivil || '',
                        tratamento: userData.tratamento || '',
                        senha: userData.senha || ''
                    });
                } else {
                    console.error('Erro ao buscar os dados do usuário:', response.statusText);
                    setSnackbarMessage('Erro ao buscar os dados do perfil. Tente novamente.');
                    setSnackbarSeverity('error');
                    setSnackbarOpen(true);
                }
            } catch (error) {
                console.error('Erro ao fazer a requisição:', error);
                setSnackbarMessage('Erro ao buscar os dados do perfil. Tente novamente.');
                setSnackbarSeverity('error');
                setSnackbarOpen(true);
            }
        };

        if (userId) {
            fetchUserData();
        }
    }, [userId, apiUrl]);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleBack = () => {
        navigate('/configuracao');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if (name === 'nome') {
            dispatch(updateUserName(value));
        }
    };

    const handleDateChange = (date) => {
        setFormData({
            ...formData,
            dataNascimento: date ? date : null
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formDataToSubmit = {
            ...formData,
            dataNascimento: formData.dataNascimento ? formData.dataNascimento.toISOString() : null,
        };

        try {
            const response = await fetch(`${apiUrl}/pacientes/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formDataToSubmit)
            });

            if (response.ok) {
                setSnackbarMessage('Perfil atualizado com sucesso!');
                setSnackbarSeverity('success');
                setSnackbarOpen(true);

                setTimeout(() => {
                    navigate('/configuracao');
                }, 2000);

            } else {
                console.error('Erro ao atualizar perfil:', response.statusText);
                setSnackbarMessage('Erro ao atualizar perfil. Tente novamente.');
                setSnackbarSeverity('error');
                setSnackbarOpen(true);
            }
        } catch (error) {
            console.error('Erro ao fazer a requisição:', error);
            setSnackbarMessage('Erro ao fazer a requisição. Tente novamente.');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
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
                <Typography variant="h5" align="center" sx={{ flexGrow: 1, textAlign: 'center', paddingRight: '10%', paddingTop: '8px', fontSize: '31px', fontFamily: 'Saturday' }}>
                    Editar Perfil
                </Typography>
            </div>

            <Container
                maxWidth="xl"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '24px',
                }}
            >
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Nome ou Apelido"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        inputProps={{ maxLength: 50 }}
                        required
                        autoComplete="off"
                    />
                    <TextField
                        label="E-mail"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                        autoComplete="off"
                    />

                    <FormControl fullWidth margin="normal" required>
                        <InputMask
                            mask="(99) 99999-9999"
                            value={formData.telefone}
                            onChange={(e) => handleChange({ target: { name: 'telefone', value: e.target.value } })}
                        >
                            {(inputProps) => (
                                <TextField
                                    {...inputProps}
                                    label="Telefone"
                                    inputProps={{ pattern: "\\(\\d{2}\\) \\d{5}-\\d{4}" }}
                                    fullWidth
                                    margin="normal"
                                    required
                                    InputProps={{ ...inputProps.InputProps }}
                                />
                            )}
                        </InputMask>
                    </FormControl>

                    <FormControl fullWidth margin="normal" required>
                        <LocalizationProvider dateAdapter={AdapterDayjs} locale={dayjs.locale()}>
                            <Stack spacing={5} sx={{ width: '100%' }}>
                                <DatePicker
                                    value={formData.dataNascimento ? dayjs(formData.dataNascimento) : null}
                                    onChange={handleDateChange}
                                    label="Selecione a data"
                                    format="DD/MM/YYYY"
                                    textField={(params) => <TextField {...params} fullWidth required />}
                                    disableFuture
                                    inputFormat="DD/MM/YYYY"
                                    allowKeyboardControl
                                />
                            </Stack>
                        </LocalizationProvider>
                    </FormControl>

                    <FormControl fullWidth margin="normal" required>
                        <InputLabel>Gênero</InputLabel>
                        <Select
                            name="genero"
                            value={formData.genero}
                            onChange={handleChange}
                            label="Gênero"
                        >
                            <MenuItem value="FEMININO">Feminino</MenuItem>
                            <MenuItem value="MASCULINO">Masculino</MenuItem>
                            <MenuItem value="OUTROS">Outros</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth margin="normal" required>
                        <InputLabel>Estado Civil</InputLabel>
                        <Select
                            name="estadoCivil"
                            value={formData.estadoCivil}
                            onChange={handleChange}
                            label="Estado Civil"
                        >
                            <MenuItem value="SOLTEIRO">Solteiro(a)</MenuItem>
                            <MenuItem value="CASADO">Casado(a)</MenuItem>
                            <MenuItem value="DIVORCIADO">Divorciado(a)</MenuItem>
                            <MenuItem value="VIUVO">Viúvo(a)</MenuItem>
                            <MenuItem value="OUTRO">Outro</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth margin="normal" required>
                        <InputLabel>O que deseja tratar?</InputLabel>
                        <Select
                            name="tratamento"
                            value={formData.tratamento}
                            onChange={handleChange}
                            label="O que deseja tratar?"
                        >
                            <MenuItem value="ANSIEDADE">Ansiedade</MenuItem>
                            <MenuItem value="DEPRESSAO">Depressão</MenuItem>
                            <MenuItem value="MAUS_HABITOS">Maus Hábitos</MenuItem>
                            <MenuItem value="VICIOS">Vícios</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        label="Senha"
                        name="senha"
                        type={showPassword ? 'text' : 'password'}
                        value={formData.senha}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleClickShowPassword}>
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        inputProps={{
                            autoComplete: 'current-password' 
                        }}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        style={{ textTransform: 'none', marginTop: '16px', backgroundColor: '#003366', color: 'white', fontSize: '17px' }}
                    >
                        Atualizar Perfil
                    </Button>
                </form>

                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackbar}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
                        {snackbarMessage}
                    </Alert>
                </Snackbar>
            </Container>
        </>
    );
};

export default EditarPerfil;
