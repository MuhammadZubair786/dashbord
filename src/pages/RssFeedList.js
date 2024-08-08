import React from 'react'
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

function RssFeedList() {
  const sampleData = [
    {
      id: '1',
      category: 'Tech',
      language: 'English',
      name: 'Understanding React',
      url: 'https://www.example.com/understanding-react',
    },
    {
      id: '2',
      category: 'Travel',
      language: 'Spanish',
      name: 'Exploring Barcelona',
      url: 'https://www.example.com/exploring-barcelona',
    },
    // ... other data entries
  ];

  return (
    <Container>
      {/* Filters Section */}
      <Box sx={{ bgcolor: 'white', p: { xs: 2, sm: 3, md: 4 }, mb: 5, borderRadius: 2 }}>
        {/* Heading */}
        <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3 }}>
          Filters
        </Typography>

        {/* Filters using Grid */}
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              placeholder="Search Keyword"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              placeholder="Select Status"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              placeholder="Select Category"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              placeholder="Select Language"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>

        {/* Action Buttons */}
        <Grid container spacing={2}>
          <Grid item xs={6} sm={3} md={1.5}>
            <CustomFilledButton title="Search" />
          </Grid>
          <Grid item xs={6} sm={3} md={1.5}>
            <CustomOutlinedButton title="Reset" />
          </Grid>
        </Grid>
      </Box>

      {/* Table Section */}
      <Box sx={{ bgcolor: 'white', p: { xs: 2, sm: 3, md: 4 }, borderRadius: 2 }}>
        {/* Table Heading */}
        <Grid container justifyContent="space-between" sx={{ mb: 3 }}>
          <Grid item>
            <Typography variant="h6">RSS Feed Items</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">Showing 1-7 of 7</Typography>
          </Grid>
        </Grid>

        {/* Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ bgcolor: '#D9D9D9' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>CATEGORY</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>LANGUAGE</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>NAME</TableCell>
                <TableCell sx={{ fontWeight: 'bold', width: '40%' }}>URL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sampleData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.language}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>
                    <a href={row.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'blue' }}>
                      {row.url}
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}

export default RssFeedList;
