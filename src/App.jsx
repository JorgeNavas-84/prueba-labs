import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBarComponent from './components/AppBarComponent';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9DA993',
    },
    secondary: {
      main: '#BCA88E',
    },
  },
});


const AppContent = ({ user, handleLogout, handleLogin, handleRegister }) => {
  const location = useLocation();
  const hideAppBar = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {!hideAppBar && <AppBarComponent />}
      <Routes>
        {/* Rutas para usuarios autenticados */}
        {user ? (
          <>
            <Route path="/" element={<Home user={user} onLogout={handleLogout} />} />
           
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          // Rutas para usuarios no autenticados
          <>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register onRegister={handleRegister} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </>
  );
};

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleRegister = (user) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
          <div>
            <AppContent
              user={user}
              handleLogout={handleLogout}
              handleLogin={handleLogin}
              handleRegister={handleRegister}
            />
          </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;