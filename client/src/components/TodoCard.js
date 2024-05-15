import { Box, Stack, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import RuleFolderIcon from '@mui/icons-material/RuleFolder';
import React from 'react'

const TodoCard = (props) => {
  return (
    <Box
      sx={{
        width: '50%',
        border: '1px solid #2f2f2f',
        borderRadius: '10px',
        // borderTopLeftRadius: '10px',
        // borderBottomLeftRadius: '10px'
      }}>
      <Stack
        display={'flex'}
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        sx={{
          backgroundColor: '#141414',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          padding: '20px'
        }}
      >
        <Typography sx={{ color: '#bcbcbc' }}>{props.title}</Typography>
        <Box className='itemCenter'
          sx={{
            background: '#1768dd',
            color: 'white',
            padding: '8px',
            borderRadius: '10px'
          }}>
          <SendIcon />
        </Box>
      </Stack>
      <Stack sx={{ padding: '50px' }} className='itemCenter'>
        <Stack sx={{ color: '#dcdcdc' }}>
          <RuleFolderIcon sx={{ fontSize: '120px' }} />
          <Typography sx={{ textAlign: 'center' }}>No Data!</Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default TodoCard