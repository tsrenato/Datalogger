import { Box, IconButton, Tooltip } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import VisibilityIcon from '@mui/icons-material/Visibility';
import React, { useState } from 'react'
import Config from '../modals/Config';
import LogsTable from './LogsTable';

export default function TableActions({ row }) {

  const [settingsOpen, setSettingsOpen] = useState(false);
  const [logsOpen, setLogsOpen] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >

      <Tooltip title='Visualizar Logs'>
        <IconButton onClick={() => setLogsOpen(true)}>
          <VisibilityIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title='Configurações'>
        <IconButton onClick={() => setSettingsOpen(true)}>
          <SettingsIcon />
        </IconButton>
      </Tooltip>

      {
        settingsOpen
          ? <Config
            datalogger={row}
            open={settingsOpen}
            setOpen={setSettingsOpen}
          />
          : null
      }

      {
        logsOpen
          ? <LogsTable
            datalogger={row}
            open={logsOpen}
            setOpen={setLogsOpen}
          />
          : null
      }

    </Box>
  )
}
