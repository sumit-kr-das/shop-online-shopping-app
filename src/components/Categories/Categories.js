import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
// import CountUp from 'react-countup';


const Categories = ({ category }) => {
  return (
    <Box>
        <Box sx={{ display: "flex", alignItems: "center"}}>
            <Box component="img" src={category[0].img} />
            <Typography sx={{ ml:1 }}>{category[0].name}</Typography>

        </Box>
    </Box>
  )
}

export default Categories