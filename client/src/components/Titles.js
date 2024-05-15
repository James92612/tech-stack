import React from 'react'
import { Divider, Stack, Typography } from '@mui/material'


export const SectionTitle = ({ title }) => (
  <Stack>
    <Typography variant='h4' sx={{ fontWeight: '600', color: '#dcdcdc' }}>{title}</Typography>
    <Divider sx={{ border: '1px solid #ececec' }} />
  </Stack>
)

export const BoxTitle = ({ title }) => (
  <Typography variant='h5' sx={{ color: 'white', fontWeight: '600' }}>{title}</Typography>
)