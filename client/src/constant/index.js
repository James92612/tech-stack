import React from 'react'
import { Face2Outlined, Face3Outlined, Face4Outlined, Face5Outlined, Face6Outlined, FaceOutlined } from '@mui/icons-material'

const customersInfo = [
  {
    avatar: <FaceOutlined />,
    token: '6617cd6fddce7991943c1c15',
  },
  {
    avatar: <Face2Outlined />,
    token: '6617cd6fddce7991943c1c16',
  },
  {
    avatar: <Face3Outlined />,
    token: '6617cd6fddce7991943c1c17',
  },
  {
    avatar: <Face4Outlined />,
    token: '6617cd6fddce7991943c1c18',
  },
  {
    avatar: <Face5Outlined />,
    token: '6617cd6fddce7991943c1c19',
  },
  {
    avatar: <Face6Outlined />,
    token: '6617cd6fddce7991943c1c1a',
  },
]

const promotionsInfo = [
  {
    title: 'Min Order Item Quantity Promotion',
    type: 'order_min_quantity',
    promo: '4 items',
    points: '1.25',
  },
  {
    title: 'Min Order Total Promotion',
    type: 'order_min_total_price',
    promo: '$60',
    points: '1.5',
  },
  {
    title: 'Item Category Promotion',
    type: 'item_category',
    promo: 'drink',
    points: '1.1',
  },
  {
    title: 'Order Day of Purchase Promotion',
    type: 'order_day_of_purchase',
    promo: 'Sunday',
    points: '1.1',
  },
]

const testCaseInfo = [
  {
    title: 'Health check',
    text: 'Verify that base health - check connection is established',
  },
  {
    title: 'Loyalty tier: Test 1',
    text: 'Test loyalty - tier endpoint',
  },
  {
    title: 'Rewards points: Test 1',
    text: 'Test rewards - points endpoint',
  },
]

export { customersInfo, promotionsInfo, testCaseInfo }