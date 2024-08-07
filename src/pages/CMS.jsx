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
  Button,
  IconButton,
  Tooltip,
} from '@mui/material';
import { Visibility as ViewIcon } from '@mui/icons-material';
import InputField from "../components/InputField";
import { CustomFilledButton, CustomOutlinedButton } from '../components/Button';

function CMS() {
  const sampleData = [
    {
      id: 1,
      media: 'https://example.com/media1.jpg',
      title: 'Sample Title 1',
      description: 'Sample Description 1',
      viewPage: 'https://example.com/page1',
    },
    {
      id: 2,
      media: 'https://example.com/media2.jpg',
      title: 'Sample Title 2',
      description: 'Sample Description 2',
      viewPage: 'https://example.com/page2',
    },
  ];

  return (
    <Container>
      <Box sx={{ bgcolor: 'white', p: 2, mb: 5, borderRadius: "5px" }}>
        {/* Heading */}
        <Typography variant="h4" component="h1" gutterBottom sx={{ pl: 1 }}>
          Filters
        </Typography>

        {/* Filter Inputs */}
        <Grid container spacing={2} mb={2}>
          <Grid item xs={12} sm={6} md={3}>
            <InputField placeholder="Search Title" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField placeholder="Select Status" />
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ display: "flex", justifyContent: "space-around" }}>
            <CustomFilledButton title={"Search"} />
            <CustomOutlinedButton title={"Reset"} />
          </Grid>
        </Grid>
      </Box>

      {/* Gap between sections */}
      <Box sx={{ mb: 5 }} />

      {/* Table Container */}
      <Box sx={{ bgcolor: 'white', borderRadius: "5px" }}>
        {/* Table Heading */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 4 }}>
          <Typography variant="h6">CMS List</Typography>
          <Typography variant="h6">Showing {sampleData.length}-{sampleData.length} of {sampleData.length}</Typography>
        </Box>

        {/* Table */}
        <TableContainer component={Paper} sx={{ width: '100%', borderRadius: 0 }}>
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
                      <img src={row.media} alt={`Media ${row.id}`} width="100" style={{ borderRadius: '4px' }} />
                    </TableCell>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell>
                      <Tooltip title="View Page">
                        <IconButton
                          component="a"
                          href={row.viewPage}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="view page"
                        >
                          <ViewIcon />
                        </IconButton>
                      </Tooltip>
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
