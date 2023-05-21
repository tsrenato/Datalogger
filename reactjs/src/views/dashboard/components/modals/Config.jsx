import { Button, Modal, Paper, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../../providers/AppContext';
import { toast } from 'react-toastify';

export default function Config({ datalogger, open, setOpen }) {
    const ctx = useContext(AppContext);
    const [config, setConfig] = useState(datalogger);

    const _saveConfig = async () => {
        try {
            const resp = await ctx.axios.put('/api/dataloggers/' + datalogger.id, {
                name: config.name,
                interval: parseInt(config.log_interval),
            });
            toast.success('Configurações salvas com sucesso!');
            ctx.getDataloggers();
            setOpen(false);
        } catch (err) {
            toast.error('Ocorreu um erro ao salvar as configurações. Tente novamente mais tarde.');
        }
    }

    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
        >
            <Paper
                sx={{
                    height: '80vh',
                    marginTop: '10vh',
                    marginX: '5vw',
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography
                    sx={{
                        marginY: '.5rem'
                    }}
                >Configurações</Typography>

                <TextField
                    label="Nome"
                    value={config.name}
                    onChange={e => setConfig({ ...config, name: e.target.value })}
                    sx={{
                        marginY: '.5rem'
                    }}
                />

                <TextField
                    label="Intervalo de Atualização"
                    value={config.log_interval}
                    onChange={e => setConfig({ ...config, log_interval: e.target.value })}
                    type='number'
                    sx={{
                        marginY: '.5rem'
                    }}
                />

                <Button
                    variant='contained'
                    color='success'
                    onClick={_saveConfig}
                    sx={{
                        marginY: '.5rem',
                        maxWidth: '300px'
                    }}
                >Salvar</Button>
            </Paper>
        </Modal>
    )
}
