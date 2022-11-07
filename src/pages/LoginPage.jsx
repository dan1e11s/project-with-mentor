import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContextProvider';
import { Paper, Box, TextField, Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuth();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }}
    >
      <Paper
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40%',
          borderRadius: '15px',
          backgroundColor: '#fff',
          height: '55vh',
          textAlign: 'center',
        }}
      >
        <div>
          <h2>Login</h2>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              marginBottom: '25px',
            }}
          >
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Username"
              variant="standard"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '25px',
            }}
          >
            <LockOpenIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Password"
              variant="standard"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Button
            variant="contained"
            style={{
              width: '150px',
              backgroundColor: '#272727',
            }}
            onClick={() => login(username, password)}
          >
            Login
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default LoginPage;
