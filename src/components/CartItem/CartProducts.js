import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartProducts = ({ product }) => {
  return (
    <TableContainer>
        <Table sx={{ border: "1px solid #E0E0E0", borderBottom: "none" }}>
            <TableHead>
                <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Remove</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell component="th" sx={{ display: "flex", alignItems: "center" }}>
                        <Box sx={{ width: "80px", height: "80px" }} component="img" src={product[1].img} />
                        <Typography>{ product[0].title}</Typography>
                    </TableCell>
                    <TableCell>{ product[0].newPricw}</TableCell>
                    <TableCell>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <AddIcon sx={{ border:"1px solid #E0E0E0",borderRadius: "50%", padding: "2px", cursor: "pointer"}}/>
                            <Typography sx={{mx: 1}}>1</Typography>
                            <RemoveIcon sx={{ border:"1px solid #E0E0E0",borderRadius: "50%", padding: "2px", cursor: "pointer"}}/>
                        </Box>
                    </TableCell>
                    <TableCell><DeleteIcon /></TableCell>
                </TableRow>
            </TableBody>
            <TableBody>
                <TableRow>
                    <TableCell component="th" sx={{ display: "flex", alignItems: "center" }}>
                        <Box sx={{ width: "80px", height: "80px" }} component="img" src={product[1].img} />
                        <Typography>{ product[0].title}</Typography>
                    </TableCell>
                    <TableCell>{ product[0].newPricw}</TableCell>
                    <TableCell>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <AddIcon sx={{ border:"1px solid #E0E0E0",borderRadius: "50%", padding: "2px", cursor: "pointer"}}/>
                            <Typography sx={{mx: 1}}>1</Typography>
                            <RemoveIcon sx={{ border:"1px solid #E0E0E0",borderRadius: "50%", padding: "2px", cursor: "pointer"}}/>
                        </Box>
                    </TableCell>
                    <TableCell><DeleteIcon /></TableCell>
                </TableRow>
            </TableBody>
            <TableBody>
                <TableRow>
                    <TableCell component="th" sx={{ display: "flex", alignItems: "center" }}>
                        <Box sx={{ width: "80px", height: "80px" }} component="img" src={product[1].img} />
                        <Typography>{ product[0].title}</Typography>
                    </TableCell>
                    <TableCell>{ product[0].newPricw}</TableCell>
                    <TableCell>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <AddIcon sx={{ border:"1px solid #E0E0E0",borderRadius: "50%", padding: "2px", cursor: "pointer"}}/>
                            <Typography sx={{mx: 1}}>1</Typography>
                            <RemoveIcon sx={{ border:"1px solid #E0E0E0",borderRadius: "50%", padding: "2px", cursor: "pointer"}}/>
                        </Box>
                    </TableCell>
                    <TableCell><DeleteIcon /></TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default CartProducts