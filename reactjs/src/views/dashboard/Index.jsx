import { Box, Menu, MenuItem, Paper, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import DataloggerTable from './components/tables/DataloggerTable'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppContext } from '../../providers/AppContext';
import { Logout } from '@mui/icons-material';

export default function Dashboard() {
  const ctx = useContext(AppContext);
  const [menuAnchor, setMenuAnchor] = useState(null);

  const _handleMenu = e => {
    setMenuAnchor(e.currentTarget);
  }

  const _handleCloseMenu = () => setMenuAnchor(null);

  const _handleLogout = () => {
    ctx.app.logout();
    _handleCloseMenu();
  }

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
        onClick={_handleMenu}
      >
        <AccountCircleIcon
          sx={{ marginRight: 1 }}
        /> {ctx.user.email}
      </Box>

      <Menu
        anchorEl={menuAnchor}
        onClose={_handleCloseMenu}
        open={Boolean(menuAnchor)}
        
      >
        <MenuItem
          onClick={_handleLogout}
          sx={{
            minWidth: '150px'
          }}
        ><Logout /> sair</MenuItem>
      </Menu>

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
