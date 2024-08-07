import React from 'react';
import {
  Container,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
} from '@mui/material';
import InputField from '../components/InputField';
import { CustomFilledButton, CustomOutlinedButton } from '../components/Button';

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
      <Box sx={{ bgcolor: 'white', p: { xs: 2, sm: 3, md: 4 }, mb: 5, borderRadius: 2 }}>
        {/* Heading */}
        <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 2, pl: 1 }}>
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
          <Grid container spacing={2} mb={2}>
            <Grid item xs={12} sm={6} md={3}>
              <InputField placeholder="Search title" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <InputField placeholder="Select Status" />
            </Grid>
            <Grid item xs={6} sm={3} md={1.5}>
              <CustomFilledButton title={"Search"} />
            </Grid>
            <Grid item xs={6} sm={3} md={1.5}>
              <CustomOutlinedButton title={"Reset"} />
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box sx={{ bgcolor: 'white', borderRadius: 2, }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 3 }}>
          <Typography variant="h6">Ads List</Typography>
        </Box>

        <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
          <Table sx={{ width: '100%' }}>
            <TableHead sx={{ bgcolor: '#D9D9D9' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                <TableCell sx={{ fontWeight: 'bold', width: '20%' }}>MEDIA</TableCell>
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
                    </TableCell>
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
