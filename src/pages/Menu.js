import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItemButton, ListItemText, ListItemIcon, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const Menu = ({ onLogout }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const titles = {
    '/dashboard': 'PsiCuida',
    '/agendamento-sessao': 'Agendar Sessão Virtual',
    '/auto-ajuda': 'Autoajuda',
    '/forum': 'Fórum de Apoio',
    '/configuracao': 'Configurações',
    '/conteudo-educacional': 'Conteúdo Educacional',
    '/diario': 'Diário',
    '/sessao-virtual': 'Sessões Virtuais',
    '/suporte': 'Suporte Urgência',
    '/ansioso': 'Ansioso(a)',
    '/insone': 'Insônia',
    '/notificacoes': 'Notificações',
    '/logout': 'Sair',
  };

  const currentTitle = titles[location.pathname] || 'PsiCuida';

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#003366' }} >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '90%',
              fontSize: '30px',
              paddingTop: '5px',
              fontFamily: 'Saturday'

            }}>
            {currentTitle}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItemButton component={Link} to="/dashboard">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Início" />
            </ListItemButton>
            <ListItemButton component={Link} to="/agendamento-sessao">
              <ListItemIcon>
                <CalendarTodayIcon />
              </ListItemIcon>
              <ListItemText primary="Agendamento de Sessão" />
            </ListItemButton>
            <ListItemButton component={Link} to="/sessao-virtual">
              <ListItemIcon>
                <VideoCallIcon />
              </ListItemIcon>
              <ListItemText primary="Sessões Virtuais" />
            </ListItemButton>
            <ListItemButton component={Link} to="/auto-ajuda">
              <ListItemIcon>
                <SelfImprovementIcon />
              </ListItemIcon>
              <ListItemText primary="Autoajuda" />
            </ListItemButton>
            <ListItemButton component={Link} to="/conteudo-educacional">
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary="Conteúdo Educacional" />
            </ListItemButton>
            <ListItemButton component={Link} to="/diario">
              <ListItemIcon>
                <BookIcon />
              </ListItemIcon>
              <ListItemText primary="Diário" />
            </ListItemButton>
            <ListItemButton component={Link} to="/forum">
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Fórum de Apoio" />
            </ListItemButton>
            <ListItemButton component={Link} to="/suporte">
              <ListItemIcon>
                <LocalHospitalIcon />
              </ListItemIcon>
              <ListItemText primary="Suporte Urgência" />
            </ListItemButton>
            <ListItemButton component={Link} to="/configuracao">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Configurações" />
            </ListItemButton>
            <ListItemButton component={Link} to="/logout">
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Sair" />
            </ListItemButton>
          </List>
        </div>
      </Drawer>
    </>
  );
}

export default Menu;
