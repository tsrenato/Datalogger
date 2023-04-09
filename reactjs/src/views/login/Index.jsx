import { Box, Button, Card, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'

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

    }
  }

  return (
    <Paper
      elevation={1}
      sx={{
        alignItems: 'center',
        padding: 2
      }}
    >
      <Grid
        container
        spacing={2}
        columns={1}
        sx={{
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Grid item xs={8}>
          <Typography fontStyle={'oblique'} color={'ButtonFace'}>Acesso ao sistema de gerenciamento</Typography>
        </Grid>

        <Grid item xs={8}>
          <TextField
            label='Login'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </Grid>

        <Grid item xs={8}>
          <TextField
            label='Senha'
            value={password}
            type='password'
            onChange={e => setPassword(e.target.value)}
          />
        </Grid>

          <Grid item>
            <Button
              variant='contained'
              color='secondary'
              onClick={_handleClear}
            >Limpar</Button>
          </Grid>

          <Grid item>
            <Button
              variant='contained'
              color='success'
              disabled={!username.length || !password.length}
              onClick={_handleLogin}
            >Entrar</Button>
          </Grid>
        
      </Grid>
    </Paper>
  )
}
