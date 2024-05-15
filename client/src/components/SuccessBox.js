import React from 'react'
import { CheckOutlined } from '@mui/icons-material'
import { Box, Stack, Typography, styled } from '@mui/material'


const CircleBtn = styled('div')({
  width: '40px',
  height: '40px',
  backgroundColor: '#4aaa19',
  borderRadius: '50% !important',
  border: 'none',
  transition: '0.4s',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#274c77'
  }
})

const SuccessBox = () => (
  <Box sx={{ width: '60%', height: '200px' }} className='itemCenter'>
    <Stack>
      <Stack className='itemCenter' sx={{ my: 3.5 }}>
        <CircleBtn className='itemCenter' ><CheckOutlined /></CircleBtn>
      </Stack>
      <Typography className='itemCenter' sx={{ fontSize: '20px', fontWeight: '500', color: '#dcdcdc' }}>
        Success! Great Job <img src='rokect.png' style={{ width: '40px' }} alt='rokect' />
      </Typography>
    </Stack>
  </Box>
)

export { SuccessBox }