import React, { useState, useEffect } from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography, Tabs, Tab, RadioGroup, FormControlLabel, Radio, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import DatePicker from 'react-datepicker'
import PropTypes from 'prop-types'
import 'react-datepicker/dist/react-datepicker.css'
import { createCustomer, createPromotion, getCustomers } from '../actions/customerAction'
//sdfsdf
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  )
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}


const CreateSeedModal = (props) => {
  const [catData, setcatData] = useState([]);
  const { open, handleClose } = props
  const [flag, setFlag] = useState(false)
  const [value, setValue] = useState(0)
  const [data, setData] = useState({
    customerId: '',
    date: new Date(),
    price: '',
    category: '',
    name: '',
    type: '',
    pormo: '',
    points: '',
  })

  useEffect(() => {
    getCustomers().then((res) => {
      setcatData(res)
    })
  }, [])
  const handleClick = (event, newValue) => {
    setValue(newValue)
  }

  const handleDateChange = (date) => {
    setData({ ...data, ['date']: date })
  }

  const handleChange = (e) => {
    console.log('[' + e.target.name + '] : ' + e.target.value)
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit1 = () => {
    try {
      createCustomer(data).then((res) => {
        alert("added successfully!")
        let temp = []
        temp = catData;
        temp.push(res.customer);
        setcatData(temp)
        handleClose(true)
      })

    }
    catch (err) {
      console.log(err)
    }
  }
  const handleSubmit2 = () => {
    try {
      createPromotion(data).then((res) => {
        // setcatData([...catData, res._id])
        handleClose(false)
      })
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <Box sx={{ backgroundColor: '#fff', p: 2 }}>
        <DialogTitle sx={{ pt: 3, fontSize: '28px', fontWeight: '700' }}>
          Create Seed
        </DialogTitle>

        <DialogContent sx={{ pt: 4 }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className='itemCenter'>
            <Tabs value={value} onChange={handleClick} aria-label="basic tabs example">
              <Tab label='Order' {...a11yProps(0)} />
              <Tab label="Promotion" {...a11yProps(1)} />
            </Tabs>
          </Box>

          <CustomTabPanel value={value} index={0}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultValue={flag}
            >
              <FormControlLabel value={false} onClick={() => setFlag(false)} control={<Radio />} label="New Customer" />
              <FormControlLabel value={true} onClick={() => setFlag(true)} control={<Radio />} label="Registered Customer" />
            </RadioGroup>
            <FormControl fullWidth sx={{ my: 2 }}>
              <InputLabel id="demo-simple-select-label">CustomerId</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data.customerId}
                name='customerId'
                label="CustomerId"
                onChange={handleChange}
                disabled={flag ? false : true}
              >
                {
                  catData && catData.length > 0 &&
                  catData.map((item, index) => (
                    <MenuItem key={index} value='6617cd6fddce7991943c1c16'>{item._id}</MenuItem>
                  ))
                }
                {/* <MenuItem value='6617cd6fddce7991943c1c16'>6617cd6fddce7991943c1c16</MenuItem>
                <MenuItem value='6617cd6fddce7991943c1c17'>6617cd6fddce7991943c1c17</MenuItem> */}
              </Select>
            </FormControl>
            <Box>
              <DatePicker
                className='messageInput'
                selected={data.date}
                placeholderText='Date and Time'
                showTimeSelect


                onChange={handleDateChange}
              />
            </Box>
            <TextField sx={{ my: 2 }} fullWidth variant='outlined' label='Price' name='price' onChange={handleChange} />
            <FormControl fullWidth sx={{ my: 2 }}>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data.category}
                name='category'
                label="Category"
                onChange={handleChange}

              >
                <MenuItem value='meal'>meal</MenuItem>
                <MenuItem value='drink'>drink</MenuItem>
                <MenuItem value='candy'>candy</MenuItem>
                <MenuItem value='comvenience'>comvenience</MenuItem>
              </Select>
            </FormControl>
            <DialogActions>
              <Button variant='contained' color='error' sx={{ color: 'white !important' }} onClick={handleClose} autoFocus>Close</Button>
              <Button variant='contained' color='success' sx={{ color: 'white !important' }} onClick={handleSubmit1}>Submit</Button>
            </DialogActions>
          </CustomTabPanel>

          <CustomTabPanel value={value} index={1}>
            <TextField sx={{ py: 1 }} fullWidth variant='standard' label='Name' name='name' onChange={handleChange} />
            <FormControl fullWidth sx={{ my: 2 }}>
              <InputLabel id="demo-simple-select-label">Promotions</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data.category}
                name='category'
                label="Category"
                onChange={handleChange}

              >
                <MenuItem value='OrderItem'>Min Order Item Quantity Promotion</MenuItem>
                <MenuItem value='OrderTotal'>Min Order Total Promotion</MenuItem>
                <MenuItem value='Catetgory'>Item Category Promotion</MenuItem>
                <MenuItem value='Purchase'>Order Day of Purchase Promotion</MenuItem>
              </Select>
            </FormControl>
            <TextField sx={{ py: 1 }} fullWidth variant='standard' label='points multiplier' name='points' onChange={handleChange} />
            <DialogActions>
              <Button variant='contained' color='error' sx={{ color: 'white !important' }} onClick={handleClose} autoFocus>Close</Button>
              <Button variant='contained' color='success' sx={{ color: 'white !important' }} onClick={handleSubmit2}>Submit</Button>
            </DialogActions>
          </CustomTabPanel>

        </DialogContent>

      </Box>
    </Dialog>
  )
}

export default CreateSeedModal