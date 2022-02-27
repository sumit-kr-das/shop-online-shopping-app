import { Box, Typography } from '@mui/material'
import React from 'react'

const ProductSlider = ({ image }) => {
  return (
    <Box sx={{border: "1px solid green", display: "flex"}}>
        <Box sx={{ border: "1px solid red", display: "flex", flexDirection: "column", height: "400px" }}>
            <Box component="img" src={image.img1} sx={{ width: "120px", height: "120px",border: "1px solid black", mb:1}} />
            <Box component="img" src={image.img1} sx={{ width: "120px", height: "120px",border: "1px solid black", mb:1}}/>
            <Box component="img" src={image.img1} sx={{ width: "120px", height: "120px",border: "1px solid black", mb:1}}/>
        </Box>
        <Box sx={{ml: 2}}>
            <Box component="img" src={image.img1} sx={{ width: "400px", height: "400px",border: "1px solid black"}} />
        </Box>
    </Box>
  )
}

export default ProductSlider