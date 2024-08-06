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
  
function NewsApi() {
    const sampleData = [
     
      ];
  return (
    <Container>
    <Box sx={{ bgcolor: 'white', p: 5, mb: 5, borderRadius: 2 }}>
        {/* Heading */}
        <Typography variant="h4" component="h1" gutterBottom>
          Filters
        </Typography>
        {/* First Row */}
        <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Column on extra-small screens, row on medium screens and up
        gap: 2,
        mb: 2,
        flexWrap: 'wrap', // Allows wrapping of items on smaller screens
      }}
    >
      <TextField
        fullWidth
        label="Keyboard"
        variant="outlined"
        sx={{ flex: 1, minWidth: { xs: '100%', md: 'auto' } }}
      />
      <TextField
        fullWidth
        label="Select Source"
        variant="outlined"
        sx={{ flex: 1, minWidth: { xs: '100%', md: 'auto' } }}
      />
      <TextField
        fullWidth
        label="Select Language"
        variant="outlined"
        sx={{ flex: 1, minWidth: { xs: '100%', md: 'auto' } }}
      />
      <TextField
        fullWidth
        type='date'
        label=""
        variant="outlined"
        sx={{ flex: 1, minWidth: { xs: '100%', md: 'auto' } }}
      />
    </Box>

        {/* Second Row */}
        <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Column on extra-small screens, row on medium screens and up
        gap: 2,
        mb: 2,
        flexWrap: 'wrap', // Allows wrapping of items on smaller screens
      }}
    >
      <TextField
        sx={{ flex: '0 1 250px', minWidth: { xs: '100%', md: '250px' } }}
        label=""
        type='date'
        variant="outlined"
      />
      
      <Button
        sx={{
          flex: '0 1 50px',
          bgcolor: '#7367F0',
          color: 'white',
          minWidth: { xs: '100%', md: '120px' },
          mt: { xs: 2, md: 0 } // Margin top on smaller screens
        }}
      >
        Search
      </Button>
      
      <Button
        variant="outlined"
        sx={{
          flex: '0 1 50px',
          bgcolor: 'transparent',
          minWidth: { xs: '100%', md: '120px' },
          mt: { xs: 2, md: 0 } // Margin top on smaller screens
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
        <Typography variant="h6">News ApI List</Typography>
      </Box>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: '#D9D9D9' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>IMAGE</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>TITLE</TableCell>
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
                  <TableCell>
                    <img src={row.image} alt={row.title} width="80" />
                  </TableCell>
                  <TableCell>{row.title}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
</Container>    )
}

export default NewsApi