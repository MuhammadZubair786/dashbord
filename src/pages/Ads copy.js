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
} from '@mui/material';

function Ads() {
  const sampleData = [
    {
      id: '1',
      media: 'https://static.boredpanda.com/blog/wp-content/uploads/2014/02/creative-print-ads-coverimage.jpg',
      title: 'Sample Title 1',
      timestamp: '2024-08-06 10:30',
      frequency: 'Daily',
      createdDateTime: '2024-08-01 09:00',
    },
    {
      id: '2',
      media: 'https://i.ytimg.com/vi/oeahD5YqCEE/maxresdefault.jpg',
      title: 'Sample Title 2',
      timestamp: '2024-08-06 11:00',
      frequency: 'Weekly',
      createdDateTime: '2024-08-02 10:00',
    },
    // Add more objects as needed
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
            label="Search title"
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
          <Typography variant="h6">Ads List</Typography>
        </Box>

        {/* Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ bgcolor: '#D9D9D9' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                <TableCell sx={{ fontWeight: 'bold', width: '20%' }}>MEDIA</TableCell> {/* Wider MEDIA column */}
                <TableCell sx={{ fontWeight: 'bold' }}>TITLE</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>TIMESTAMP</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>FREQUENCY</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>CREATED DATE TIME</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sampleData.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} sx={{ textAlign: 'center', color: 'red' }}>
                    Record Not Found
                  </TableCell>
                </TableRow>
              ) : (
                sampleData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>
                      <img
                        src={row.media}
                        alt={`Media ${row.id}`}
                        style={{ width: '100px', height: 'auto', borderRadius: '4px' }}
                      />
                    </TableCell>{' '}
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.timestamp}</TableCell>
                    <TableCell>{row.frequency}</TableCell>
                    <TableCell>{row.createdDateTime}</TableCell>
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

export default Ads;
