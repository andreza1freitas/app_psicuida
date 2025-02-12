import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Card, CardContent, IconButton } from '@mui/material';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CallIcon from '@mui/icons-material/Call';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

const SessaoVirtual = () => {
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const userId = useSelector((state) => state.user.userId);

  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    const fetchAgendamentos = async () => {
      try {
        const response = await fetch(`${apiUrl}/agendamentos/por-paciente?pacienteId=${userId}`);
        if (response.ok) {
          const data = await response.json();
          setAgendamentos(data);
        } else {
          console.error('Erro ao buscar agendamentos:', response.statusText);
        }
      } catch (error) {
        console.error('Erro ao buscar agendamentos:', error);
      }
    };

    fetchAgendamentos();
  }, [apiUrl, userId]);

  return (
    <Container maxWidth="sm" sx={{ padding: '20px', borderRadius: '15px', marginTop: '40px' }}>
      {agendamentos.length === 0 ? (
        <Typography variant="h6" align="center" color="textSecondary">
          Você não tem sessões agendadas.
        </Typography>
      ) : (
        agendamentos.map((agendamento) => (
          <Box key={agendamento.id} display="flex" justifyContent="center" mb={2}>
            <Card sx={{ width: '100%', padding: '20px', boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" align="center" sx={{ marginBottom: '20px' }}>
                  Sessão com {agendamento.profissionalNome}
                </Typography>
                <Typography variant="body1" color="textSecondary" align="center" sx={{ marginBottom: '10px' }}>
                  Data: {dayjs(agendamento.dataHora).format('DD/MM/YYYY')}
                </Typography>
                <Typography variant="body1" color="textSecondary" align="center" sx={{ marginBottom: '20px' }}>
                  Horário: {dayjs(agendamento.dataHora).format('HH:mm')}
                </Typography>

                {agendamento.status === 'PENDENTE' && (
                  <Typography variant="body2" color="error" align="center" sx={{ marginBottom: '20px' }}>
                    Sessão pendente
                  </Typography>
                )}

                <Box mt={2}>
                  <Box display="flex" justifyContent="space-around">
                    <IconButton color="primary">
                      <VideoCallIcon sx={{ fontSize: 50, color: '#007BFF' }} />
                    </IconButton>

                    <IconButton color="secondary">
                      <CallIcon sx={{ fontSize: 50, color: '#28A745' }} />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))
      )}
    </Container>
  );
};

export default SessaoVirtual;
