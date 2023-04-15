import { Box, Paper } from '@mui/material'
import React from 'react'

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
          backgroundColor: 'white',
          alignItems: 'center',
          padding: 2
        }}
      >Header</Box>

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
          Dashboard Content - Data Loggers Table
        </Paper>
      </Box>

    </Box>
  )
}
