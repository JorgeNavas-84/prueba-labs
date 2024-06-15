
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import { login } from '../services/authService';
import '../App.css';


function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (user) {
      onLogin(user);
      navigate('/');
    } else {
      setError('El correo o la contraseña no son válidos');
    }
  };

  return (
    <>
      
    <Container maxWidth="sm" className="login-form-container">
      <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <div className="background-image-container">
            <div className="background-image"></div>
          </div>
          <Typography variant="h4" align="center" gutterBottom>          
            Inicia Sesión
          </Typography>
          <form onSubmit={handleLogin}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
              <Grid item xs={12}>
                <TextField
                  type="email"
                  label="Correo"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="password"
                  label="Contraseña"
                  variant="outlined"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" size='large' fullWidth disableElevation >
                  Iniciar
                </Button>
              </Grid>
            </Grid>
          </form>
          {error && (
            <Typography variant="body1" align="center" style={{ color: 'red', marginTop: '10px' }}>
              {error}
            </Typography>
          )}
          <Typography variant="body1" align="center" style={{ marginTop: '20px' }}>
            No tienes una cuenta? <Link to="/register">Regístrate</Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
    </>
  );
}

export default Login;
