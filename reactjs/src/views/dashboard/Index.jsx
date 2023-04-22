import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import DataloggerTable from './components/tables/DataloggerTable'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Dashboard() {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          backgroundColor: 'white',
          alignItems: 'center',
          padding: 2,
          fontFamily: 'sans-serif',
          color: '#5a5a5a'
        }}
      >
        <AccountCircleIcon
          sx={{ marginRight: 1 }}
        /> Usuário
      </Box>

      <Box
        sx={{
          width: '100%',
          backgroundColor: 'pink',
          marginTop: '2rem',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            alignItems: 'center',
            padding: 2,
            minHeight: '85vh'
          }}
        >
          <Typography
            variant='h4'
            sx={{
              marginBottom: 2,
              color: '#5a5a5a'
            }}
          >Gerenciar Data Loggers</Typography>
          <DataloggerTable />
        </Paper>
      </Box>

    </Box>
  )
}
