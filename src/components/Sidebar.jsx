import { Box } from '@mui/material'
import React from 'react'

const sidebar = () => {
    // shortcuts list
    // p=padding
    // bgcolor= backgroundColor
  return (
    <Box bgcolor="skyblue" flex={0.25} p={2} sx={{display:{xs:"none", sm:"block"}}}>
      sidebar
    </Box>
  )
}

export default sidebar

