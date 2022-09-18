import { Box } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box bgcolor="lightcoral" flex={0.25} p={2} sx={{display:{xs:"none", sm:"block"}}}>
      Right
    </Box>
  )
}

export default Rightbar
