import React from 'react'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Modal } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { AppContext } from '../../../../providers/AppContext';
import { formatDate } from '../../../../shared/ecma/utils';


export default function LogsTable({ datalogger, open, setOpen }) {
  const ctx = useContext(AppContext);
  const [logs, setLogs] = useState([]);

  const _fetchLogs = async () => {
    try {
      const resp = await axios.get(ctx.service.url + ':' + ctx.service.port + '/api/logs/datalogger/' + datalogger.id);
      setLogs(resp.data);
    } catch (err) {
      toast.error('Falha ao buscar os logs.');
    }
  }

  useEffect(() => {
    _fetchLogs();
    return () => {
      let ac = new AbortController();
      ac.abort();
    }
  }, []);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
    >
      <TableContainer
        component={Paper}
        sx={{
          height: '80vh',
          marginTop: '10vh',
          // padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
        }}>
          
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            paddingX: 2,
            paddingY: 1,
          }}
        >
          {/* <Typography sx={{ marginRight: 1 }}>Filtrar: </Typography> */}
          {/* <TableSearch filter={filter} setFilter={setFilter} /> */}
        </Box>
        <Table sx={{ minWidth: 650 }}>
          <TableHead sx={{ backgroundColor: '#d1d1d1' }}>
            <TableRow>
              <TableCell align='center'>ID log</TableCell>
              <TableCell align='center'>Hash</TableCell>
              <TableCell align='center'>Temperatura</TableCell>
              <TableCell align='center'>Latitude</TableCell>
              <TableCell align='center'>Longitude</TableCell>
              <TableCell align='center'>Horário</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {
              logs.map((log, idx) => (
                <TableRow
                  key={'dtlgr_' + idx}
                >
                  <TableCell align='center' component='th' scope='row'>{log.id}</TableCell>
                  <TableCell align='center'>{log.hash}</TableCell>
                  <TableCell align='center'>{log.temperature} °C</TableCell>
                  <TableCell align='center'>{log.latitude}</TableCell>
                  <TableCell align='center'>{log.longitude}</TableCell>
                  <TableCell align='center'>{formatDate(log.created_at)}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Modal>
  )
}
