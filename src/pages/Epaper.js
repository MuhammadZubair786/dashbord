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

function Epaper() {
  const sampleData = [
    { id: 1, media: 'https://s3-alpha-sig.figma.com/img/e90e/5b1c/3cdfbf4684e8037c71247d2bbf6bffcc?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OjFz9SQWiaXFJB-HNIrqdqeJgml-So~iYRJuiuug2D-j7Ti3dCTvE4y6rvlqmq4I32SFunqPYoKcFVgz8UgesuhStPaWCtilgAXsN796xEXDK1pV4szO~TaKt0SNVApZdT31kJ6VROYymlyen8Yq-veQ-BBdYtKqz0uNhUhc1sDXCPHazkUDyyv5H5GsZ-JqVJggC~xrP2l68t3Obxy~n81IgKIV9sbwTl1huk0BGyH1m7Q0Gw83t5bDMczrSyNHNj5g38Z0APhyKloVS62hq2vP-ufxkacxdSWQMpBWXbZENeqRTJK5aYOuNcvBg8K2XidUdFxslx1qv~0Ff6IU2g__', name: 'News One', pdfUrl: 'https://example.com/news-one.pdf' },
    {
      id: 3,
      media: 'https://via.placeholder.com/100',
      name: 'News Three',
      pdfUrl: 'https://example.com/news-three.pdf',
    },
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
          <Typography variant="h6">E-paper List</Typography>
          <Typography variant="h6">Showing 1-1 of 1</Typography>
        </Box>

        {/* Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ bgcolor: '#D9D9D9' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                <TableCell sx={{ fontWeight: 'bold', width: '20%' }}>MEDIA</TableCell> {/* Wider MEDIA column */}
                <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>PDF</TableCell> {/* Updated header */}
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
                      <IconButton
                        component="a"
                        href={row.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="download"
                      >
                        <DownloadIcon />
                      </IconButton>
                    </TableCell>
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

export default Epaper;
