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

function NewsApi() {
  const sampleData = [
    // Add your sample data here
  ];

  return (
    <Container>
      <Box sx={{ bgcolor: 'white', p: { xs: 2, sm: 3, md: 4 }, mb: 5, borderRadius: 2 }}>
        {/* Heading */}
        <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 2, pl: 1 }}>
          Filters
        </Typography>

        {/* Filters Layout */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 2,
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Grid container spacing={2} mb={2}>
            <Grid item xs={12} sm={6} md={3}>
              <InputField placeholder="Keyboard" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <InputField placeholder="Select Source" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <InputField placeholder="Select Language" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <InputField placeholder="YYYY-MM-DD" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <InputField placeholder="YYYY-MM-DD" />
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

      <Box sx={{ bgcolor: 'white', borderRadius: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 3 }}>
          <Typography variant="h6">News API List</Typography>
        </Box>

        <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
          <Table sx={{ width: '100%' }}>
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
                      <img
                        src={row.image}
                        alt={row.title}
                        style={{ width: '100px', height: 'auto', borderRadius: '4px' }}
                      />
                    </TableCell>
                    <TableCell>{row.title}</TableCell>
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

export default NewsApi;
