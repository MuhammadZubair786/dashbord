import React from 'react'
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
  
function RssFeed() {
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
        {
          id: '3',
          category: 'Food',
          language: 'French',
          name: 'The Art of French Cooking',
          url: 'https://www.example.com/the-art-of-french-cooking',
        },
        {
          id: '4',
          category: 'Fitness',
          language: 'German',
          name: 'Getting Fit at Home',
          url: 'https://www.example.com/getting-fit-at-home',
        },
        {
          id: '5',
          category: 'Health',
          language: 'Italian',
          name: 'Healthy Living Tips',
          url: 'https://www.example.com/healthy-living-tips',
        },
        {
          id: '6',
          category: 'Finance',
          language: 'Portuguese',
          name: 'Managing Personal Finance',
          url: 'https://www.example.com/managing-personal-finance',
        },
        {
          id: '7',
          category: 'Education',
          language: 'Japanese',
          name: 'Online Learning Strategies',
          url: 'https://www.example.com/online-learning-strategies',
        }
      ];
      
  return (
    <Container>
      <Box sx={{ bgcolor: 'white', p: { xs: 2, sm: 3, md: 4, lg: 5 }, mb: 5, borderRadius: 2 }}>
      {/* Heading */}
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3 }}>
        Filters
      </Typography>

      {/* First Row */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2,
          mb: 2,
          flexWrap: 'wrap',
        }}
      >
        <TextField
          label="Search Keyword"
          variant="outlined"
          sx={{ flex: 1, minWidth: { xs: '100%', sm: 'auto' }, height: 56 }}
        />
        <TextField
          label="Select Status"
          variant="outlined"
          sx={{ flex: 1, minWidth: { xs: '100%', sm: 'auto' }, height: 56 }}
        />
        <TextField
          label="Select Category"
          variant="outlined"
          sx={{ flex: 1, minWidth: { xs: '100%', sm: 'auto' }, height: 56 }}
        />
        <TextField
          label="Select Language"
          variant="outlined"
          sx={{ flex: 1, minWidth: { xs: '100%', sm: 'auto' }, height: 56 }}
        />
      </Box>

      {/* Second Row */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2,
          mb: 2,
          flexWrap: 'wrap',
        }}
      >
        <Button
          sx={{
            flex: '0 1 100%',
            maxWidth: '120px',
            bgcolor: '#7367F0',
            color: 'white',
            height: 52,
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
            height: 52,
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
        <Typography variant="h6">Rss Feed Item </Typography>
        <Typography variant="h6">Showing 1-7 of 7</Typography>
      </Box>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: '#D9D9D9' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>CATEGORY</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>LANGUAGE</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>NAME</TableCell>
              <TableCell sx={{ fontWeight: 'bold', width: '40%' }}>URL</TableCell> {/* Wider URL column */}
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
  </Container>  )
}

export default RssFeed