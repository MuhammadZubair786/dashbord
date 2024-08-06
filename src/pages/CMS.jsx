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
import { Visibility as ViewIcon } from '@mui/icons-material';

function CMS() {
  const sampleData = [
    {
      id: 1,
      media:
        'https://s3-alpha-sig.figma.com/img/d280/9fcb/ce28e15c83e8db1af888a59af0de4650?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LuVdpKpjS5ztBKzt3yC1MV9HI8nPhtubkSNVssBZbpOQtssqK2eQA~qs2InN3CgV8hWmkWCQwDEIXqxtJicfpX2EHN8tuncoawwZnZUfP7rm1cJRwd6-G9eGsOeEGQEI-rbLsOeDPnmQxQJkp37Tpe0twdvHO5f~TiwzBi6DLgt3KbqhUiYVS3SkXUFvxm3W-HhV6pwLR8aXpqSPyC~ZAFbtqN3VfoUQ6DYUgBrIh0YKwsyLX4~TAFE8r33vbuMPdgNGmCssTqFDkMV5Hh5Z3jWpoA7nWtdyRvFJMhketGbvfOBI~f1lDfC7YzMat1gP~8-oQDzeJSfXReazW1yuSA__',
      title: 'Sample Title 1',
      description: 'Sample Description 1',
      viewPage: 'https://example.com/page1',
    },
    {
      id: 2,
      media:
        'https://s3-alpha-sig.figma.com/img/0d65/fe36/91813c559a11549b42da519a3ca24105?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L7kiQHAYba67XHKz-024LUm9vz4fU3cx90zw9DV~1fyvElow1G3KzZCojA54oPYWcIe01weVgk6C3-6YmS2cv4QtxaIRDLqQWx-XIXKnMQ0Zzp2RX1EJuBD6yfWFkmXqkMty9gMWHLOCTBRGZfcetUnb4-rCbb5kDmxxtaMjEMKJxYbRuTwSxyRriKimP2Rzvoi0PK1U0~dNVlA526Ru1DvI4KU6CrZvThPWE0stkaQ5as86HZq33YMqF34bWDGy41O1o5CDrwjAfNUVl0ylSPApksx3vrYfxsHUnSlWNM9pRWezFCDe916u88IcL4kFFm7~9A1qOo~k4t6xjXfgeQ__',
      title: 'Sample Title 2',
      description: 'Sample Description 2',
      viewPage: 'https://example.com/page2',
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
          <Typography variant="h6">CMS List</Typography>
          <Typography variant="h6">
            Showing {sampleData.length}-{sampleData.length} of {sampleData.length}
          </Typography>
        </Box>

        {/* Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ bgcolor: '#D9D9D9' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                <TableCell sx={{ fontWeight: 'bold', width: '20%' }}>MEDIA</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>TITLE</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Description</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>View Page</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sampleData.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} sx={{ textAlign: 'center', color: 'red' }}>
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
                    <TableCell>{row.description}</TableCell>
                    <TableCell>
                      <IconButton
                        component="a"
                        href={row.viewPage}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="view page"
                      >
                        <ViewIcon />
                      </IconButton>
                      View page
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

export default CMS;
