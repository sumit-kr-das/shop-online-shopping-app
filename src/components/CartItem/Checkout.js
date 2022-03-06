import React from 'react'
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const Checkout = () => {
  return (
    <TableContainer>
    <Table sx={{ border: "1px solid #E0E0E0", borderBottom: "none" }}>
        <TableBody>
            <TableRow>
                <TableCell>Subtotal</TableCell>
                <TableCell>$30</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Estimated Shopping</TableCell>
                <TableCell>$56.90</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Shopping Discount</TableCell>
                <TableCell>$2</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Typography variant='h6'>Total</Typography>
                </TableCell>
                <TableCell>
                    <Typography variant='h6'>$80</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Button variant='contained'>Checkout</Button>
                </TableCell>
                <TableCell></TableCell>
            </TableRow>
        </TableBody>
    </Table>
</TableContainer>
  )
}

export default Checkout