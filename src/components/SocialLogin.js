import React from 'react';
import { Button, Box } from '@mui/material';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const SocialLogin = ({ onLogin }) => {
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_BASE_URL;

  const handleSocialLogin = async (userInfo, provider) => {
    try {
      const response = await fetch(`${apiUrl}/auth/social-login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: userInfo.name,
          email: userInfo.email,
          providerId: userInfo.id,
          provider,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        onLogin({ userId: data.userId, userName: data.userName });
        navigate('/dashboard');
      } else {
        console.error('Erro ao autenticar usuário social');
      }
    } catch (error) {
      console.error('Erro ao conectar ao backend:', error);
    }
  };

  const handleGoogleLoginSuccess = async (tokenResponse) => {
    try {
      const accessToken = tokenResponse.access_token;
      
      // Fetch user info from Google API
      const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`);
      
      if (response.ok) {
        const userInfo = await response.json();
        
        const user = {
          id: userInfo.sub,
          name: userInfo.name,
          email: userInfo.email,
        };

        await handleSocialLogin(user, 'google');
      } else {
        console.error('Erro ao obter informações do usuário');
      }
    } catch (error) {
      console.error('Erro ao conectar à API do Google:', error);
    }
  };

  const login = useGoogleLogin({
    onSuccess: handleGoogleLoginSuccess,
    onError: () => console.error('Erro ao autenticar com o Google.'),
    flow: 'implicit',
  });

  const handleFacebookLogin = () => {
    if (window.FB) {
      window.FB.login(response => {
        if (response.authResponse) {
          window.FB.api('/me', { fields: 'name,email' }, userInfo => {
            handleSocialLogin(userInfo, 'facebook');
          });
        }
      }, { scope: 'email' });
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, marginTop: 4, width: '100%' }}>
      
      <Button
         sx={{
           color: '#525659',
           '&:hover': {
             backgroundColor: '#ef9797',
          },
         }}
        onClick={() => login()}
        startIcon={<img src="/assets/img/img_google.png" alt="Google" style={{ width: '30px', height: '30px' }} />}
      >
        Entrar com o Google
      </Button>

      {/* Botão de Login com Facebook */}
      <Button
         sx={{
            color: '#525659',
           '&:hover': {
             backgroundColor: '#9eb8ed',
          },
         }}
        onClick={handleFacebookLogin}
        startIcon={<img src="/assets/img/img_face.png" alt="Facebook" style={{ width: '30px', height: '30px' }} />}
      >
        Entrar com o Facebook
      </Button>
    </Box>
  );
};

export default SocialLogin;
