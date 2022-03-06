import React from 'react';
import { Box, Button, Checkbox, Container, FormControlLabel, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxWidth="lg" sx={{ display: "flex",flexDirection: "column", alignItems: "center", mt:4 }}>
        <Typography variant="h4">Login</Typography>
        <Typography>Already have an account? <Link to="/login">Login</Link></Typography>
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
            label="Email"
            sx={{display: "block", mt:1}}
            />
            <TextField
            required
            id="outlined-required"
            label="Password"
            sx={{display: "block", mt:1}}
            />
            <TextField
            required
            id="outlined-required"
            label="Confirm Password"
            sx={{display: "block", mt: 1}}
            />
            <FormControlLabel 
            control={<Checkbox />} 
            label="I agree to terms & Policy." 
            sx={{display: "block", my: 1}}
            />
            <Button variant='contained'>Submit & Register</Button>
        </Box>
    </Container>
  )
}

export default Signup