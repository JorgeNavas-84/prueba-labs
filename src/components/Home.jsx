import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  Card,  CardContent,  CardMedia,  Typography,  IconButton,  Box, TextField} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';


function Home({ user, onLogout }) {
  const [dogBreeds, setDogBreeds] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();


  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  useEffect(() => {
    const fetchDogBreeds = async () => {
      const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": "live_nl7r9VQqaVvGszJCFXxarFDjTUnMf59FgVNRaOXBuexEFZfnIP1LD6K7xTAFq1Ks"
      });

      const requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
      };

      try {
        const response = await fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=ASC&page=0&limit=200", requestOptions);
        const result = await response.json();
        setDogBreeds(result);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchDogBreeds();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDogBreeds = dogBreeds.filter((breed) =>
    breed.breeds[0]?.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div>
      {user ? (
        <Box display="flex" alignItems="center" justifyContent="space-between" marginTop={4} marginLeft={2} marginRight={2} bgcolor="white" padding={2}>
          <Typography variant="h6">Hola, {user.email}</Typography>
          <IconButton onClick={handleLogout} color="primary">
            <LogoutIcon />
          </IconButton>
        </Box>
      ) : (
        <>
          <h2>Hola, Invitado</h2>
          <button onClick={navigate('/login')}>Login</button>
        </>
      )}

      <div className="login-form-container">
        <TextField
          label="Busca por raza"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ marginBottom: '8px' }}
        />
        <h3>Razas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '320px' }}>
          {filteredDogBreeds.map((breed, index) => (
            <Card key={index} style={{ display: 'flex', position: 'relative' }}>
              <CardMedia
                component="img"
                image={breed.url}
                alt={breed.breeds[0]?.name}
                style={{ width: 128, height: 72, objectFit: 'cover', objectPosition: 'top' }}
              />
              <CardContent style={{ flex: '1 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h6" align="center">
                  {breed.breeds[0]?.name}
                </Typography>
              </CardContent>
              <IconButton
                style={{ alignSelf: 'flex-end', marginRight: '8px', marginBottom: '8px' }}
              >
                <FavoriteIcon color={'primary'} />
              </IconButton>
            </Card>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Home;

