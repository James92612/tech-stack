import React from 'react'
import { Box, Card, Divider, Paper, Typography, styled } from '@mui/material'
import { ScienceOutlined } from '@mui/icons-material'
import { BoxTitle } from '../../components/Titles'
import { testCaseInfo } from '../../constant'
import { SuccessBox } from '../../components/SuccessBox'


const DefaultBtn = styled('span')({
  width: '35px',
  height: '35px',
  backgroundColor: '#1768dd',
  color: 'white !important',
  borderRadius: '8px',
  transition: '0.4s',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#274c77'
  }
})

const TestCases = () => {

  return (
    <Box sx={{ pt: 3, width: '50%' }}>
      <BoxTitle title='PreFlight check!' /> <br />
      {testCaseInfo.map((item, index) => (
        <Paper key={index}>
          {index !== 0 && <Divider sx={{ my: 1, border: '1px solid #1f1f1f' }} />}
          <Card className='between alignCenter'>
            <Box>
              <Typography sx={{ mt: 1, fontWeight: '600', color: '#dcdcdc' }}>{item.title}</Typography>
              <Typography sx={{ mt: 1, color: '#6a6a6a' }}>{item.text}</Typography>
            </Box>
            <DefaultBtn variant='default' className='itemCenter'><ScienceOutlined /></DefaultBtn>
          </Card>
        </Paper>
      ))}
      <SuccessBox />
    </Box>
  )
}

export default TestCases