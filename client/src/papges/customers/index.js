import React, { useState, useEffect } from 'react'
import { Box, Button, Card, Divider, Paper, Stack, Typography, styled, } from '@mui/material'
import { FaceOutlined } from '@mui/icons-material'
import { SectionTitle } from '../../components/Titles'
import { customersInfo, promotionsInfo } from '../../constant'
import CustomerProfile from './CustomerProfile'
import { getCustomers } from '../../actions/customerAction'


const ViewBtn = styled(Button)({
  backgroundColor: '#141414',
  border: '1px solid #2b2b2b',
  borderRadius: '5px !important',
})

const Customers = () => {
  const [customerData, setData] = useState([]);
  useEffect(() => {
    getCustomer()
  }, [])
  // getCustomer()
  const getCustomer = () => {
    getCustomers().then((res) => {
      setData(res)
    })
  }
  return (
    <Box>
      <Stack sx={{ pb: 5, }}>
        <SectionTitle title='Customers' /><br />
        <Box >
          {customerData.map((item, index) => (
            <Paper key={index} >
              {index !== 0 && <Divider sx={{ my: 1, border: '1px solid #1f1f1f' }} />}
              <Card className='between' sx={{ px: 2 }}>
                <Typography className='alignCenter' sx={{ fontWeight: '600', color: '#bfbfbf' }}><FaceOutlined />&nbsp; &nbsp; {item._id}</Typography>
                <ViewBtn>View details</ViewBtn>
              </Card>
            </Paper>
          ))}
        </Box>
      </Stack>
      <Stack>
        <SectionTitle title='Promotions' /> <br />
        <Box sx={{ mt: 2 }}>
          {promotionsInfo.map((item, index) => (
            <Paper key={index} >
              {index !== 0 && <Divider sx={{ my: 1, border: '1px solid #1f1f1f' }} />}
              <Card sx={{ px: 2 }}>
                <Typography sx={{ fontWeight: '600', color: '#dcdcdc' }}>{item.title}</Typography>
                <Typography sx={{ mt: 1, color: '#6a6a6a' }}>
                  Type: {item.type} <br />
                  Promo criteria: {item.promo} <br />
                  Points multiplier: {item.points}
                </Typography>
              </Card>
            </Paper>
          ))}
        </Box>
      </Stack>
      <CustomerProfile />
    </Box>
  )
}

export default Customers