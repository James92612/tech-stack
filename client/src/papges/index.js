import * as React from 'react'
import PropTypes from 'prop-types'
import { Tabs, Tab, Box } from '@mui/material'
import { BadgeOutlined, HomeOutlined, NextWeekOutlined } from '@mui/icons-material'
import Home from './home'
import TestCases from './testCases'
import { SectionTitle } from '../components/Titles'
import Customers from './customers'

function TabPanel(props) {
  const { children, value, index, component, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{ width: '100%' }}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {index !== 1 && <SectionTitle title={children} />}
          {component}
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

export default function VerticalTabs() {

  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#000', display: 'flex', minHeight: '100vh' }} >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ p: 0.5, background: '#00152a' }}
      >
        <Tab label={<HomeOutlined />} {...a11yProps(0)} />
        <Tab label={<BadgeOutlined />} {...a11yProps(1)} />
        <Tab label={<NextWeekOutlined />} {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0} component={<Home />}>
        Home
      </TabPanel>
      <TabPanel value={value} index={1} component={<Customers />}>
        Customer profile
      </TabPanel>
      <TabPanel value={value} index={2} component={<TestCases />}>
        Test cases
      </TabPanel>
    </Box>
  )
}