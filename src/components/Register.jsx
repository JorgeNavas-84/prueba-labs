import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import { register } from '../services/authService';

function Register({ onRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const user = await register(email, password);
      onRegister(user);
      navigate('/');
    } catch (error) {
      setError('Failed to register');
    }
  };

  return (
    <Container maxWidth="sm"className="login-form-container">
      <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <div className="background-image-container">
            <div className="background-image"></div>
          </div>
          <Typography variant="h4" align="center" gutterBottom>
            Regístrate
          </Typography>
          <form onSubmit={handleRegister}>
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
                <Button type="submit" variant="contained" color="primary" size='large' fullWidth disableElevation>
                  Registrarme
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
            Ya tienes una cuenta? <Link to="/login">inicia sesión</Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Register;
