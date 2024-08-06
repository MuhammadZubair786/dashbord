import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#D9D9D9",
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    // No border radius defined here
    '&:nth-of-type(odd)': {
        // backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function CategoryTable({ rows }) {
    return (
        <TableContainer component={Paper} sx={{ borderRadius: "0px", width: "100%" }}>
            <Table aria-label="customized table">
                <TableHead sx={{ backgroundColor: "#D9D9D9" }}>
                    <TableRow>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell align="center">IMAGE</StyledTableCell>
                        <StyledTableCell align="center">MAIN CATEGORY</StyledTableCell>
                        <StyledTableCell align="center">image</StyledTableCell>
                        <StyledTableCell align="center">TOTAL BLOGS</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows?.map((row, index) => (
                        <StyledTableRow key={row.image}>
                            <StyledTableCell component="th" scope="row">
                                {index + 1}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <img src={row.image} alt="" style={{ width: "50px", height: "50px", borderRadius: "50%", margin: "0px auto", border: "1px solid " }} />
                            </StyledTableCell>
                            <StyledTableCell align="center">--</StyledTableCell>
                            <StyledTableCell align="center">{row.name}</StyledTableCell>
                            <StyledTableCell align="center">{row.blogCount}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CategoryTable;
