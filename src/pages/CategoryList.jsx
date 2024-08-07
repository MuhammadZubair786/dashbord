import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
// import Page from 'src/components/Page';
import CategoryTable from '../components/CategoryTable';
import InputField from '../components/InputField';
// import Button from 'src/theme/overrides/Button';
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
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-MB8Fpvp40mR6m856c5sKfsAQLxwhZ15oXOpEXl_LbAeDcGacnnrw0DOmIztSNOARvgY&usqp=CAU',
    mainCategories: 159,
    fat: 6.0,
    name: "Entertainment",
    blogCount: 4,
    mostSelected: 4
  },
  {
    image: 'https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.webp',
    mainCategories: 237,
    fat: 9.0,
    name: "Tech",
    blogCount: 10,
    mostSelected: 4

  },
  {
    image: 'https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?size=626&ext=jpg&ga=GA1.1.1393156666.1720775880&semt=sph',
    mainCategories: 262,
    fat: 16.0,
    name: "Tech",
    blogCount: 6,
    mostSelected: 6
  },
  {
    image: 'https://img.freepik.com/free-vector/science-lab-objects_23-2148488312.jpg?size=626&ext=jpg&ga=GA1.1.1393156666.1720775880&semt=sph',
    mainCategories: 305,
    fat: 3.7,
    name: "Science",
    blogCount: 4,
    mostSelected: 8
  },
  {
    image: 'https://img.freepik.com/free-vector/science-lab-objects_23-2148488312.jpg?size=626&ext=jpg&ga=GA1.1.1393156666.1720775880&semt=sph',
    mainCategories: 356,
    fat: 16.0,
    name: "Science",
    blogCount: 3,
    mostSelected: 4
  }
];


function CategoryList() {
  return (
    <Container maxWidth="xl" sx={{
      backgroundColor: "#F8F7FA"
    }}>
      <Box sx={{ border: "" }}>
        <Box sx={{ p: 2, backgroundColor: "white", borderRadius: "6px" }}>
          <Box >
            <Typography sx={{ fontSize: "18px", fontWeight: "bold", color: "black", pl: 1, my: 2 }}>
              Filters
            </Typography>
          </Box>
          <Grid container >
            <Grid item sm={12} md={6} lg={3}>
              <InputField placeholder={"Search Name"} />
            </Grid>
            <Grid item sm={12} md={6} lg={3}>
              <InputField placeholder={"Search featured"} />
            </Grid>
            <Grid item sm={12} md={6} lg={3}>
              <InputField placeholder={"Search Status"} />
            </Grid>
            <Grid item sm={12} md={6} lg={3} sx={{ display: "flex", justifyContent: "space-around" }}>
              <Button sx={{ backgroundColor: "#7367F0", color: "white", borderRadius: "4px", width: "100px", height: "40px" }}>
                Search
              </Button>
              <Button variant='outlined' sx={{ border: "1px solid #00000099", borderRadius: "4px", color: "#AA88AAEE", width: "100px", height: "40px" }}>
                Reset
              </Button>
              {/* <Button */}
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ my: 4, backgroundColor: "white", borderRadius: "6px" }}>
          <Box>
            <Typography sx={{ fontSize: "18px", fontWeight: "bold", color: "black", my: 2, p: 2 }}>
              Category List
            </Typography>
          </Box>
          <Box sx={{ mb: 4 }} />
            <CategoryTable rows={rows} />

          {/* <TableContainer component={Paper}>
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
                  <img src={row.name} alt="" style={{ width: "50px", height: "50px", borderRadius: "50%", margin: "0px auto", border: "1px solid " }} />
                </StyledTableCell>
                <StyledTableCell align="center">--</StyledTableCell>
                <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                <StyledTableCell align="center">{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
        </Box>
      </Box>

    </Container>
  )
}
export default CategoryList