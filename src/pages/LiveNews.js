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

function LiveNews() {
  const sampleData = [
    { id: 1, media: 'https://s3-alpha-sig.figma.com/img/d47f/3a45/c1ffd7fc34097a3c9fc887740dcc3e8b?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ga32i5AuhIsSmzLdu1~nR0CGAMYDtWYVfAZ1Bv4A4Bzl8rdE4TJgNT~va7StPaTUd4MnDkXLCj6dKxxMpZB6ZEg9TlCJrvqOPRsOyKeDxMpiOJ1EjORi8zEcnjT8xw15d0FSn-QGFgi7-h46WO5XhJYCF~HlrJtdchnxPVdLRYDAuCAF6yeuaI2S5j8AyKZ0ElLrCKnvp142lav8uDsggmVXLOb2VVHNLZWp9xfNC5J8RrjcrAWf3fZsvgEYe2o2v6qAk5UTZph53MpOcaete7gHlutzuNp30SjTkDGwxbq2DA0yW7W9ylfwEzKj~Nj7K7CXzd028YnbkCn8Yz8jvQ__', name: 'Ad One', url: 'https://example.com/ad-one' },
    { id: 2, media: 'https://s3-alpha-sig.figma.com/img/ba3f/a722/23e4f2de5789396dff8fe3efaa6703de?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jOtlqPp86-NUpn8APdHoUiEj~v2nzCdkJbW~6BM3egqBsQP4oVWborKEbKL5FldUZYDq0azXpLB7axBgIQzDlsZ7u0Rf3Twv7XWe0wWiXuAR8~Mp2riTgjJrgEicOfaXOowhajE79gU~Oc4fCT3QPq88VKci44afJhObizJuM24v6mTkNu997Dv4sGKSzG4qg17WSzy5C9-M9A8vrgQFZCHOCCon2v92bMCp97fBtuikpsFyqkmaECcbpXg~kaMkX~Qkw0W6QhxpDLAtArbqJEP9rYJAnv9X3LO4OO6SExomWxdUC3HENk-0xk5gktPhHSOQFSxYJnKwJLkvfY~FPA__', name: 'Ad Two', url: 'https://example.com/ad-two' },
    // Add more sample data as needed
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
          label="Company Name"
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
        <Typography variant="h6">Live  News List</Typography>
      </Box>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: '#D9D9D9' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
              <TableCell sx={{ fontWeight: 'bold', width: '20%' }}>MEDIA</TableCell> {/* Wider MEDIA column */}
              <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>URL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} sx={{ textAlign: 'center', color: 'red' }}>
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
                  <TableCell>{row.name}</TableCell>
                  <TableCell>
                    <a href={row.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'blue' }}>
                      {row.url}
                    </a>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  </Container>
  )
}

export default LiveNews