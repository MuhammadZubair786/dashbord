import React from 'react';
import {
  Container,
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Tooltip,
} from '@mui/material';
import InputField from "../components/InputField";
import { CustomFilledButton, CustomOutlinedButton } from '../components/Button';

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
      status: 'UnPublished',
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
      status: 'UnPublished',
      action: 'Edit/Delete',
    },
  ];

  return (
    <Container>
      <Box sx={{ bgcolor: 'white', p: 2, mb: 5, borderRadius: "5px" }}>
        {/* Heading */}
        <Typography variant="h4" component="h1" gutterBottom sx={{ pl: 1 }}>
          Filters
        </Typography>

        {/* First Row */}
        <Grid container spacing={2} mb={2}>
          <Grid item xs={12} sm={6} md={3}>
            <InputField placeholder="Search Title" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField placeholder="Select Category" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField placeholder="Select Visibility" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField placeholder="Status" />
          </Grid>
        </Grid>

        {/* Second Row */}
        <Grid container spacing={2} mb={2}>
          <Grid item xs={12} sm={6} md={3}>
            <InputField placeholder="Type" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField placeholder="YYYY-MM-DD HH:MM AA" type="datetime-local" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField placeholder="YYYY-MM-DD HH:MM AA" type="datetime-local" />
          </Grid>
          <Grid item xs={6} sm={3} md={1.5}>
            <CustomFilledButton title={"Search"} />
          </Grid>
          <Grid item xs={6} sm={3} md={1.5}>
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
          <Typography variant="h6">Blog List</Typography>
          <Typography variant="h6">Showing 1-20 of 131</Typography>
        </Box>

        {/* Table */}
        <TableContainer component={Paper} sx={{ width: '100%', borderRadius: 0 }}>
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
                        backgroundColor: row.status === 'Published' ? '#28C76F' : '#EA4335',
                        color: 'white',
                        borderRadius: '6px', // Rounded badge
                        padding: '0.2rem 0.6rem', // Padding to resemble a badge
                        textAlign: 'center',
                        fontSize: '0.75rem', // Adjust this value as needed
                        minWidth: 'fit-content',
                        boxShadow: 'none', // Remove default button shadow
                        '&:hover': {
                          backgroundColor: row.status === 'Published' ? '#28C76F' : '#EA4335', // Slightly darker on hover
                        },
                      }}
                    >
                      {row.status}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Tooltip title={row.action}>
                      <Button>{row.action}</Button>
                    </Tooltip>
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

export default Blogs;
