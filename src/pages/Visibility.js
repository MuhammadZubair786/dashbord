import React from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

function Visibility() {
  const sampleData = [
    {
      id: 1,
      visibility: 'Public',
    },
    {
      id: 2,
      visibility: 'Private',
    },
    {
      id: 3,
      visibility: 'Public',
    },
    {
      id: 4,
      visibility: 'Private',
    },
  ];
  return (
    <Container>
      <Box sx={{ bgcolor: 'white', p: { xs: 2, sm: 3, md: 4, lg: 5 }, mb: 5, borderRadius: 2 }}>
        {/* Heading */}
        <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3 }}>
          Filters
        </Typography>

        {/* Single Row Layout */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 2,
            alignItems: 'center',
            flexWrap: 'wrap', // Allows wrapping if needed
          }}
        >
          {/* First Input Field */}
          <TextField
            label="Search Name"
            variant="outlined"
            sx={{ flex: '1 1 280', minWidth: { xs: '100%', sm: '200px' }, height: 56 }}
          />

          {/* Second Input Field */}
          <TextField
            label="Select Status"
            variant="outlined"
            sx={{ flex: '1 1 280', minWidth: { xs: '100%', sm: '200px', lg: '50px' }, height: 56 }}
          />

          {/* Button */}
          <Button
            sx={{
              flex: '0 1 120px', // Set to a fixed width
              bgcolor: '#7367F0',
              color: 'white',
              height: 54,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Search
          </Button>

          <Button
            variant="outlined"
            sx={{
              flex: '0 1 100%',
              maxWidth: '120px',
              bgcolor: 'transparent',
              height: 54,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Reset
          </Button>
        </Box>
      </Box>

      <Box sx={{ mb: 5 }} />

      {/* Table Container */}
      <Box sx={{ bgcolor: 'white', p: 5, borderRadius: 2 }}>
        {/* Table Heading */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h6">Visibility List</Typography>
        </Box>

        {/* Table */}
        <TableContainer component={Paper}>
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
                  <TableCell colSpan={3} sx={{ textAlign: 'center', color: 'red' }}>
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
