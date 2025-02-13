import React from 'react';
import { Container, Button, Typography, List, ListItem, Link, Box } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import ChatIcon from '@mui/icons-material/Chat';
import ScrollControl from '../components/ScrollControl';

const Suporte = () => {

  return (
     <>
      <ScrollControl />
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                minHeight: '100vh',
                padding: '30px',
            }}
        >
            <Typography
                gutterBottom
                align="center"
                sx={{ 
                    marginTop: '20px', 
                    marginBottom: '30px', 
                    fontSize: '36px', 
                    fontWeight: 'bold', 
                    color: '#ed0909',
                    fontFamily: 'Rubik' 
                }}
            >
                Precisa de ajuda imediata?
            </Typography>

            <Typography
                paragraph
                align="center"
                sx={{ marginBottom: '30px', fontSize: '18px', color: '#333', lineHeight: '1.5' }}
            >
                Se você está em uma situação de emergência ou precisa falar com alguém agora, utilize uma das opções abaixo.
            </Typography>

            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3, 
                    padding: '0 20px',
                    marginBottom: '40px',
                }}
            >
                <Button
                    variant="contained"
                    color="error"
                    fullWidth
                    startIcon={<PhoneIcon />}
                    sx={{ 
                        textTransform: 'none', 
                        fontSize: '18px', 
                        height: '55px', 
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                        '&:hover': { backgroundColor: '#c62828' }
                    }}
                >
                    Ligar para o CVV (188)
                </Button>

                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    startIcon={<ChatIcon />}
                    sx={{ 
                        textTransform: 'none', 
                        fontSize: '18px', 
                        height: '55px', 
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                        '&:hover': { backgroundColor: '#1565c0' }
                    }}
                >
                    Falar com Alguém
                </Button>
            </Box>

            <Typography
                variant="subtitle1"
                align="center"
                sx={{ marginBottom: '20px', fontSize: '20px', fontWeight: 'bold', color: '#555' }}
            >
                Outros recursos de ajuda:
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    marginBottom: '40px',
                }}
            >
                <List sx={{ width: '100%', padding: 0 }}>
                    <ListItem
                        sx={{
                            justifyContent: 'center',
                            padding: '10px 0',
                        }}
                    >
                        <Link href="https://cvv.org.br/" target="_blank" rel="noopener" underline="hover" sx={{ fontSize: '16px', color: '#1e88e5' }}>
                            Centro de Valorização da Vida (CVV)
                        </Link>
                    </ListItem>
                    <ListItem
                        sx={{
                            justifyContent: 'center',
                            padding: '10px 0',
                        }}
                    >
                        <Link href="https://www.aa.org.br/" target="_blank" rel="noopener" underline="hover" sx={{ fontSize: '16px', color: '#1e88e5' }}>
                            Alcoólicos Anônimos (AA)
                        </Link>
                    </ListItem>
                    <ListItem
                        sx={{
                            justifyContent: 'center',
                            padding: '10px 0',
                        }}
                    >
                        <Link href="https://www.na.org.br/" target="_blank" rel="noopener" underline="hover" sx={{ fontSize: '16px', color: '#1e88e5' }}>
                            Narcóticos Anônimos (NA)
                        </Link>
                    </ListItem>
                </List>
            </Box>
        </Container>
        </>
    );
}

export default Suporte;
