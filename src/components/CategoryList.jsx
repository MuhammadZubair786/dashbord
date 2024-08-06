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
// import Typography from 'src/theme/overrides/Typography';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#D9D9D9",
    // backgroundColor: theme.palette.common.black,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    // backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-MB8Fpvp40mR6m856c5sKfsAQLxwhZ15oXOpEXl_LbAeDcGacnnrw0DOmIztSNOARvgY&usqp=CAU', 159, 6.0, "Entertainment", 4),
  createData('https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.webp', 237, 9.0, "Tech", 10),
  createData('https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?size=626&ext=jpg&ga=GA1.1.1393156666.1720775880&semt=sph', 262, 16.0, "Tech", 6),
  createData('https://img.freepik.com/free-vector/science-lab-objects_23-2148488312.jpg?size=626&ext=jpg&ga=GA1.1.1393156666.1720775880&semt=sph', 305, 3.7, "Science", 4),
  createData('https://img.freepik.com/free-vector/science-lab-objects_23-2148488312.jpg?size=626&ext=jpg&ga=GA1.1.1393156666.1720775880&semt=sph', 356, 16.0, "Science", 3),
];

function CategoryList() {
  return (
    <Box>
      <Box>
        <Typography>
          Category List
        </Typography>
      </Box>
      <Box sx={{ mb: 4 }} />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead sx={{ backgroundColor: "#D9D9D9" }}>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="center">IMAGE</StyledTableCell>
              <StyledTableCell align="center">MAIN CATEGORY</StyledTableCell>
              <StyledTableCell align="center">NAME</StyledTableCell>
              <StyledTableCell align="center">TOTAL BLOGS</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="center" >
                  <img src={row.name} alt="" style={{ width: "50px", height: "50px", borderRadius: "50%", margin: "0px auto" ,border:"1px solid "}} />
                </StyledTableCell>
                <StyledTableCell align="center">--</StyledTableCell>
                <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                <StyledTableCell align="center">{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>

  )
}

export default CategoryList