import React, { useState, useEffect } from 'react';
import { Container, Stack, Button, Typography, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar, Alert } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const Configuracao = () => {
    const navigate = useNavigate();
    const [openDialog, setOpenDialog] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const [openRatingDialog, setOpenRatingDialog] = useState(false);
    const [ratingValue, setRatingValue] = useState(0); //Avaliacao
    const [comentario, setComentario] = useState('');
    const [alreadyReviewed, setAlreadyReviewed] = useState(false); //Já Avaliado


    const pacienteId = useSelector((state) => state.user.userId);

    useEffect(() => {
        // Verifica se o paciente já avaliou quando o diálogo de avaliação for aberto
        if (openRatingDialog) {
            const checkReviewStatus = async () => {
                try {
                    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/avaliacoes`);
                    const avaliacoes = await response.json();
                    const pacienteAvaliacao = avaliacoes.find(avaliacao => avaliacao.pacienteId === pacienteId);

                    if (pacienteAvaliacao) {
                        setAlreadyReviewed(true);
                        setRatingValue(pacienteAvaliacao.nota);  // Ajusta o valor da avaliação
                        setComentario(pacienteAvaliacao.comentario);  // Ajusta o comentário
                    } else {
                        setAlreadyReviewed(false);
                        setRatingValue(0);  // Se não houver avaliação, limpa os valores
                        setComentario('');
                    }
                } catch (error) {
                    console.error("Erro ao verificar avaliação:", error);
                }
            };

            checkReviewStatus();
        }
    }, [openRatingDialog, pacienteId]);

    const handleEditProfile = () => {
        navigate('/editar-perfil');
    };

    const handleNotificationProfile = () => {
        navigate('/notificacoes');
    };

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    const handleOpenRatingDialog = () => {
        // Verifica se o paciente já fez uma avaliação e, caso tenha, preenche os campos.
        if (alreadyReviewed) {
            setRatingValue(ratingValue); 
            setComentario(comentario);   
        } else {
            setRatingValue(0);  
            setComentario('');
        }
        setOpenRatingDialog(true);
    };

    const handleCloseRatingDialog = () => {
        setOpenRatingDialog(false);
    };

    const handleConfirmDelete = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/pacientes/desativar/${pacienteId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ situacao: 'INATIVO' })
            });

            if (response.ok) {
                setSnackbarMessage('Conta excluída com sucesso');
                setSnackbarSeverity('success');
                setOpenSnackbar(true);
                setTimeout(() => {
                    navigate("/");
                }, 3000);
            } else {
                setSnackbarMessage('Falha ao excluir conta');
                setSnackbarSeverity('error');
                setOpenSnackbar(true);
            }
        } catch (error) {
            setSnackbarMessage('Erro ao excluir conta');
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
        }
        handleCloseDialog();
    };

    const handleRatingSubmit = async () => {
        const data = {
            nota: ratingValue,
            comentario: comentario,
            pacienteId: pacienteId,
        };

        console.log("Avaliação enviada:", data);

        try {
            const response = await fetch("http://localhost:8080/psicuida-api/v1/avaliacoes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSnackbarMessage('Obrigado pela avaliação');
                setSnackbarSeverity('success');
                setOpenSnackbar(true);
                setRatingValue(0);
                setComentario('');
                setAlreadyReviewed(true); 
                handleCloseRatingDialog();
                setTimeout(() => {
                    setOpenSnackbar(false);
                }, 2000);
            } else {
                setSnackbarMessage('Erro ao enviar avaliação');
                setSnackbarSeverity('error');
                setOpenSnackbar(true);
            }
        } catch (error) {
            console.error("Erro no envio:", error);
            setSnackbarMessage('Erro ao enviar avaliação');
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
        }
    };

    return (
        <Container
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                minHeight: '100vh',
                paddingTop: '100px',
                paddingBottom: '20px'
            }}
        >
            <Stack spacing={6} style={{ width: '100%' }}>
                <Button
                    variant="contained"
                    fullWidth
                    style={{
                        backgroundColor: '#003366',
                        textTransform: 'none',
                        fontSize: '17px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                    endIcon={<EditIcon />}
                    onClick={handleEditProfile}
                >
                    Editar Perfil
                </Button>
                <Button
                    variant="contained"
                    fullWidth
                    style={{
                        backgroundColor: '#003366',
                        textTransform: 'none',
                        fontSize: '17px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                    endIcon={<NotificationsIcon />}
                    onClick={handleNotificationProfile}
                >
                    Notificações
                </Button>
                <Button
                    variant="contained"
                    fullWidth
                    style={{
                        backgroundColor: '#003366',
                        textTransform: 'none',
                        fontSize: '17px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                    onClick={handleOpenRatingDialog}
                    endIcon={<StarIcon />}
                >
                    Avaliar Aplicativo
                </Button>

                <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    style={{
                        backgroundColor: '#003366',
                        textTransform: 'none',
                        fontSize: '17px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                    endIcon={<DeleteIcon />}
                    onClick={handleOpenDialog}
                >
                    Excluir Conta
                </Button>

                <Dialog
                    open={openRatingDialog}
                    onClose={handleCloseRatingDialog}
                    aria-labelledby="rating-dialog-title"
                >
                    <DialogTitle id="rating-dialog-title">Avaliar Aplicativo</DialogTitle>
                    <DialogContent>
                        <Typography variant="body1" gutterBottom>
                            Por favor, avalie o PsiCuida de 1 a 5 estrelas:
                        </Typography>
                        <Rating
                            name="app-rating"
                            value={ratingValue}
                            onChange={(event, newValue) => setRatingValue(newValue)}
                            size="large"
                        />
                        <Typography variant="body1" gutterBottom>
                            Deixe um comentário:
                        </Typography>
                        <textarea
                            value={comentario}
                            onChange={(e) => setComentario(e.target.value)}
                            rows="4"
                            style={{ width: '100%' }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseRatingDialog} color="primary">
                            Cancelar
                        </Button>
                        <Button onClick={handleRatingSubmit} color="secondary" disabled={!ratingValue}>
                            Enviar Avaliação
                        </Button>
                    </DialogActions>
                </Dialog>
            </Stack>

            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={{ fontWeight: 'bold' }}>
                    {"Excluir Conta"}
                </DialogTitle>
                <DialogContent>
                    <Typography variant="body1">
                    Você tem certeza de que deseja excluir sua conta? Esta ação não pode ser desfeita. 
                    No entanto, suas perguntas e respostas no fórum permanecerão, mas serão exibidas de forma anônima.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleConfirmDelete} color="secondary">
                        Excluir
                    </Button>
                </DialogActions>
            </Dialog>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={4000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default Configuracao;
