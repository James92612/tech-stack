import React from 'react'
import { Box, Typography, Stack, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { Face4Outlined } from '@mui/icons-material'

import TodoCard from '../../components/TodoCard'
import { SectionTitle } from '../../components/Titles'

function createData(orderID, date, totalItems, itemDetails) {
  return { orderID, date, totalItems, itemDetails }
}

const rows = [
  createData('6617cb6fddce7991943c1c1f', '2024-3-19', 1, [{ id: '1.6617cb6fddce7991943c1c1f', category: 'Category:drink', price: '$16.22' }]),
  createData('6617cb6fddce7991943c1c21', '2024-4-7', 2, [
    { id: '1.6617cb6fddce7991943c1c22', category: 'Category:meal', price: '$56.12' },
    { id: '2.6617cb6fddce7991943c1c23', category: 'Category:drink', price: '$16.22' },
  ]),
  createData('6617cb6fddce7991943c1c1f', '2024-3-19', 1, [{ id: '1.6617cb6fddce7991943c1c1f', category: 'Category:drink', price: '$16.22' }]),
]

const CustomerProfile = () => {
  return (
    <Box>
      <Paper sx={{ py: 5 }}>
        <SectionTitle title='Customer Profile' /><br />
        <Typography sx={{ color: '#e6e6e6' }}><Face4Outlined /> 6617cb6fddce7991943c1c15</Typography>
      </Paper>
      <Paper>
        <SectionTitle title='Loyalty program' />
        <Box sx={{ mt: 2, display: 'flex' }}>
          <TodoCard title="Loyalty tier (URL:TODO)" />
          <TodoCard title="Rewards points (URL:TODO)" />
        </Box>
      </Paper>
      <Paper sx={{ py: 5 }}>
        <SectionTitle title='Customer orders' />
        <Stack className='itemCenter' sx={{ mt: 2 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: '#1d1d1d' }}>
                <TableRow >
                  <TableCell sx={{ width: '40%' }}>Order ID</TableCell>
                  <TableCell sx={{ width: '20%' }}>Date</TableCell>
                  <TableCell sx={{ width: '20%' }}>Total Items</TableCell>
                  <TableCell sx={{ width: '20%' }}>Item Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{ backgroundColor: '#141414', opacity: '0.9' }}>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ width: '40%' }}>{row.orderID}</TableCell>
                    <TableCell sx={{ width: '20%' }}>{row.date}</TableCell>
                    <TableCell sx={{ width: '20%' }}>{row.totalItems}</TableCell>
                    <TableCell sx={{ width: '20%' }}>
                      {row.itemDetails.map((item, index) => (
                        <div key={index}>
                          {index !== 0 && <Divider sx={{ border: '1px solid #333333', my: 1 }} />}
                          <Typography sx={{ fontWeight: '600', color: '#ececec' }}>{item.id}</Typography>
                          <Typography sx={{ color: '#8a8a8a' }}>
                            {item.category} <br />
                            {item.price}
                          </Typography>
                        </div>
                      ))}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Paper>
    </Box>
  )
}

export default CustomerProfile