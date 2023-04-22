import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function AppLink({ uri, text }) {
    return (
        <Link to={uri}>
            <Typography
                sx={{
                    fontSize: '.7rem',
                    textDecoration: 'none',
                }}
            >{text}</Typography>
        </Link>

    )
}
