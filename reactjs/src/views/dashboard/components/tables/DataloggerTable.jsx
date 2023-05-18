import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../../providers/AppContext';
import TableSearch from './TableSearch';
import TableActions from './TableActions';
import { formatDate, formatString } from '../../../../shared/ecma/utils';

export default function DataloggerTable() {
    const ctx = useContext(AppContext);
    const [filter, setFilter] = useState('');
    const filteredData = ctx.dataloggers.filter(datalogger =>
        formatString(`${datalogger.name}`).indexOf(formatString(filter)) != -1 ||
        formatString(`${datalogger.log_interval}`).indexOf(formatString(filter)) != -1 ||
        formatString(`${datalogger.id}`).indexOf(formatString(filter)) != -1
    );

    useEffect(() => {
        ctx.getDataloggers();
        return () => {
            let ac = new AbortController();
            ac.abort();
        }
    }, []);

    return (
        <TableContainer component={Paper}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingX: 2,
                    paddingY: 1,
                }}
            >
                <Typography sx={{ marginRight: 1 }}>Filtrar: </Typography>
                <TableSearch filter={filter} setFilter={setFilter} />
            </Box>
            <Table sx={{ minWidth: 650 }}>
                <TableHead sx={{ backgroundColor: '#d1d1d1' }}>
                    <TableRow>
                        <TableCell align='center'>id</TableCell>
                        <TableCell align='center'>Nome</TableCell>
                        <TableCell align='center'>Intervalo Programado</TableCell>
                        {/* <TableCell align='center'>Última Leitura</TableCell> */}
                        <TableCell align='center'>Última Atualização</TableCell>
                        <TableCell align='center'>Ações</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        filteredData.map((datalogger, idx) => (
                            <TableRow
                                key={'dtlgr_' + idx}
                            >
                                <TableCell align='center' component='th' scope='row'>{datalogger.id}</TableCell>
                                <TableCell align='center'>{datalogger.name}</TableCell>
                                <TableCell align='center'>{datalogger.log_interval} min</TableCell>
                                {/* <TableCell align='center'>-90°C</TableCell> */}
                                <TableCell align='center'>{formatDate(datalogger.updated_at)}</TableCell>
                                <TableCell align='center'><TableActions row={datalogger} /></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}