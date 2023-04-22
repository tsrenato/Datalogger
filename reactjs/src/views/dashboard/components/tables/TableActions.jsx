import { Box, IconButton, Tooltip } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import VisibilityIcon from '@mui/icons-material/Visibility';
import React, { useState } from 'react'

export default function TableActions({ row }) {

  const [settingsOpen, setSettingsOpen] = useState(false);


  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >

      <Tooltip title='Visualizar Logs'>
        <IconButton onClick={() => setSettingsOpen(true)}>
          <VisibilityIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title='Configurações'>
        <IconButton onClick={() => setSettingsOpen(true)}>
          <SettingsIcon />
        </IconButton>
      </Tooltip>

    </Box>
  )
}
