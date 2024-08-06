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

function Blogs() {
  // Sample data array
  const sampleData = [
    {
      image: 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog-1.webp',
      title: 'Sample Title 1',
      visibility: 'Public',
      views: 150,
      publishDate: '2024-08-06',
      time: '11:00 AM',
      lastModified: '2024-08-05',
      status: 'Published',
      action: 'Edit/Delete',
    },
    {
      image: 'https://twowritingteachers.org/wp-content/uploads/2015/05/blogging.jpg',
      title: 'Sample Title 2',
      visibility: 'Private',
      views: 200,
      publishDate: '2024-08-07',
      time: '12:00 PM',
      lastModified: '2024-08-06',
      status: 'UnPaid',
      action: 'Edit/Delete',
    },
    {
      image: 'https://www.peppersquare.com/wp-content/uploads/2022/03/Blogs-with-Compelling-UI-Design@2x-1.jpg',
      title: 'Sample Title 3',
      visibility: 'Public',
      views: 300,
      publishDate: '2024-08-08',
      time: '01:00 PM',
      lastModified: '2024-08-07',
      status: 'Published',
      action: 'Edit/Delete',
    },
    {
      image:
        'https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/vdw3fdnjrjqyxxscep5n',
      title: 'Sample Title 4',
      visibility: 'Private',
      views: 250,
      publishDate: '2024-08-09',
      time: '02:00 PM',
      lastModified: '2024-08-08',
      status: 'UnPaid',
      action: 'Edit/Delete',
    },
  ];
  return (
    <Container>
      <Box sx={{ bgcolor: 'white', p: 5, mb: 5, borderRadius: 2 }}>
        {/* Heading */}
        <Typography variant="h4" component="h1" gutterBottom>
          Filters
        </Typography>
        {/* First Row */}
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField fullWidth label="Search Title" variant="outlined" />
          <TextField fullWidth label="Select Category" variant="outlined" />
          <TextField fullWidth label="Select Visibility" variant="outlined" />
          <TextField fullWidth label="Status" variant="outlined" />
        </Box>

        {/* Second Row */}
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField sx={{ flex: 1 }} label="Type" variant="outlined" />
          <TextField sx={{ flex: 1 }} label="" variant="outlined" type="datetime-local" />
          <TextField sx={{ flex: 1 }} label="" variant="outlined" type="datetime-local" />
          <Button sx={{ flex: '0 1 120px', bgcolor: '#7367F0', color: 'white' }}>Search</Button>
          <Button variant="outlined" sx={{ flex: '0 1 120px', bgcolor: 'transparent' }}>
            Reset
          </Button>
        </Box>
      </Box>

      {/* Gap between sections */}
      <Box sx={{ mb: 5 }} />

      {/* Table Container */}
      <Box sx={{ bgcolor: 'white', p: 5, borderRadius: 2 }}>
        {/* Table Heading */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h6">Blog List</Typography>
          <Typography variant="h6">Showing 1-20 of 131</Typography>
        </Box>

        {/* Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ bgcolor: '#D9D9D9' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>IMAGE</TableCell>
                <TableCell sx={{ fontWeight: 'bold', width: '20%' }}>TITLE</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>VISIBILITY</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>VIEWS</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Publish DATE</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>TIME</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Last Modified</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>STATUS</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>ACTION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sampleData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <img src={row.image} alt={row.title} width="80" />
                  </TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.visibility}</TableCell>
                  <TableCell>{row.views}</TableCell>
                  <TableCell>{row.publishDate}</TableCell>
                  <TableCell>{row.time}</TableCell>
                  <TableCell>{row.lastModified}</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        backgroundColor: row.status === 'Published' ? 'green' : 'red',
                        color: 'white',
                        borderRadius: 1,
                        p: 0.5,
                        textAlign: 'center',
                        width: 'fit-content',
                        fontSize: '0.75rem', // Adjust this value as needed
                      }}
                    >
                      {row.status}
                    </Box>
                  </TableCell>

                  <TableCell>{row.action}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}

export default Blogs;
