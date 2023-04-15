import { Box, Button, Divider, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import AppLink from '../../shared/AppLink';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const _handleClear = () => {
    setUsername('');
    setPassword('');
  }

  const _handleLogin = async () => {
    try {

    } catch (err) {

    } finally {
      _handleClear();
    }
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        placeItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Paper
        elevation={1}
        sx={{
          alignItems: 'center',
          padding: 2,
          textAlign: 'center',
        }}
      >
        <Typography
          variant='overline'
          sx={{
            fontSize: '1rem',
            color: '#888',
            fontWeight: 300
          }}
        >Gerenciamento Data Loggers</Typography>

        <Grid
          container
          columnGap={3}
          sx={{
            marginTop: '1.5rem'
          }}
        >

          <TextField
            label='E-mail'
            value={username}
            variant='standard'
            onChange={e => setUsername(e.target.value)}
          />

          <TextField
            label='Senha'
            value={password}
            variant='standard'
            type='password'
            onChange={e => setPassword(e.target.value)}
          />

          <Button
            variant='text'
            color='success'
            disabled={!username.length || !password.length}
            onClick={_handleLogin}
          >Entrar</Button>
        </Grid>

        <Divider sx={{
          marginBottom: '1rem',
          marginTop: '3rem',
        }} />

        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-evenly',
            fontFamily: 'sans-serif',
          }}
        >
          <AppLink uri='/dashboard' text='Recuperar senha' />
          <Divider orientation='vertical' flexItem />
          <AppLink uri='/support' text='Suporte' />

        </Box>

      </Paper >
    </Box>

  )
}
