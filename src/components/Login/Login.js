import React from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxWidth="lg" sx={{ display: "flex",flexDirection: "column", alignItems: "center", mt:4 }}>
    <Typography variant="h4">Create an Account</Typography>
    <Typography>Don't have an account? <Link to="/signup"> Create here</Link></Typography>
    <Box sx={{display: "block"}}>

        <TextField
        required
        id="outlined-required"
        label="Username"
        sx={{display: "block", mt:2, mb:1 }}
        />
       
        <TextField
        required
        id="outlined-required"
        label="Password"
        sx={{display: "block", my:1}}
        />

        <Button variant='contained'>Login</Button>
    </Box>
</Container>
  )
}

export default Login