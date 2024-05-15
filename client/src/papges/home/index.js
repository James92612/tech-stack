import React, { useState } from 'react'
import { Box, Button, Card, CardMedia, Divider, Paper, Typography, styled } from '@mui/material'
import { ListAltOutlined } from '@mui/icons-material'
import { BoxTitle } from '../../components/Titles'
import CreateSeedModal from '../../components/CreateSeedModal'

const DefaultBtn = styled(Button)({
  backgroundColor: '#1768dd',
  borderRadius: '40px !important',
  color: 'white !important',
  padding: '10px 20px',
  '&:hover': {
    backgroundColor: '#274c77'
  }
})

const FullBtn = styled(Button)({
  width: '100%',
  backgroundColor: '#2b2111',
  border: '1px solid #3c2d12',
  color: 'white !important',
  fontWeight: '500',
  fontSize: '16px',
  padding: '15px 20px',
  justifyContent: 'left !important',
  '&:hover': {
    backgroundColor: '#274c77'
  }
})

const Home = () => {

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ pt: 3 }}>
      <BoxTitle title='Hello!' />
      <Paper sx={{ width: '50%', backgroundColor: '#141414', mt: 2, borderRadius: '10px' }}>
        <Typography variant='h6' sx={{ px: 3, pt: 2.5, pb: 1.5, fontWeight: '600' }}>Teamups technical exercise</Typography>
        <Divider sx={{ border: '1px solid #1f1f1f' }} />
        <Card sx={{ px: 3, py: 2, }}>
          <CardMedia sx={{ border: '1px solid #1f1f1f', borderRadius: '10px', color: '#e6e6e6' }}>
            <Box sx={{ p: 3 }} className='between alignCenter'>
              <Typography variant='h7' sx={{ fontWeight: '600', }}>Data init</Typography>
              <DefaultBtn onClick={handleClickOpen}>
                <ListAltOutlined /> &nbsp;Create seed
              </DefaultBtn>
            </Box>
            <Divider sx={{ border: '1px solid #1f1f1f' }} />
            <Box sx={{ p: 3 }}>
              <Typography>Initialize seed data for the exercise</Typography>
              <FullBtn sx={{ textAlign: 'start' }}>
                <Typography sx={{ color: '#d09116' }}>☹</Typography><span style={{ color: '#e6e6e6' }}>&nbsp;Data is currently missing</span>
              </FullBtn>
            </Box>
          </CardMedia>
        </Card>
      </Paper >
      <CreateSeedModal handleClose={handleClose} open={open} />
    </Box >
  )
}

export default Home