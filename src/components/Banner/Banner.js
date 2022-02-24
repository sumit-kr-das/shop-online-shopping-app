import React from 'react'
import { Box } from '@mui/system'

const banner = "https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-7.png&w=1920&q=100";

const Banner = () => {
  return (
    <Box component="img" src={banner} sx={{
        width: "100%",
        objectFit: "contain",
        px: 4,
        pt: 8
    }}/>
  )
}

export default Banner