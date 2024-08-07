import React from 'react';
import {
  Container,
  Box,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import InputField from "../components/InputField";
import { CustomFilledButton, CustomOutlinedButton } from '../components/Button';

function Visibility() {
  const sampleData = [
    { id: 1, visibility: 'Public' },
    { id: 2, visibility: 'Private' },
    { id: 3, visibility: 'Public' },
    { id: 4, visibility: 'Private' },
  ];

  return (
    <Container>
      <Box sx={{ bgcolor: 'white', p: 2, mb: 5, borderRadius: "5px" }}>
        {/* Heading */}
        <Typography variant="h4" component="h1" gutterBottom sx={{ pl: 1 }}>
          Filters
        </Typography>

        {/* Filter Row */}
        <Grid container spacing={2} mb={2}>
          <Grid item xs={12} sm={6} md={3}>
            <InputField placeholder="Search Name" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField placeholder="Select Status" />
          </Grid>
          <Grid item xs={6} sm={3} md={1.5}>
            <CustomFilledButton title="Search" />
          </Grid>
          <Grid item xs={6} sm={3} md={1.5}>
            <CustomOutlinedButton title="Reset" />
          </Grid>
        </Grid>
      </Box>

      {/* Gap between sections */}
      <Box sx={{ mb: 5 }} />

      {/* Table Container */}
      <Box sx={{ bgcolor: 'white', borderRadius: "5px" }}>
        {/* Table Heading */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 4 }}>
          <Typography variant="h6">Visibility List</Typography>
        </Box>

        {/* Table */}
        <TableContainer component={Paper} sx={{ width: '100%', borderRadius: 0 }}>
          <Table>
            <TableHead sx={{ bgcolor: '#D9D9D9' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>VISIBILITY</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sampleData.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={2} sx={{ textAlign: 'center', color: 'red' }}>
                    Record Not Found
                  </TableCell>
                </TableRow>
              ) : (
                sampleData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.visibility}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}

export default Visibility;
