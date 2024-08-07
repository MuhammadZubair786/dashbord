import React from 'react';
import {
  Container,
  Box,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import InputField from "../components/InputField";
import { CustomFilledButton, CustomOutlinedButton } from '../components/Button';

function Epaper() {
  const sampleData = [
    {
      id: 1,
      media: 'https://s3-alpha-sig.figma.com/img/e90e/5b1c/3cdfbf4684e8037c71247d2bbf6bffcc?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OjFz9SQWiaXFJB-HNIrqdqeJgml-So~iYRJuiuug2D-j7Ti3dCTvE4y6rvlqmq4I32SFunqPYoKcFVgz8UgesuhStPaWCtilgAXsN796xEXDK1pV4szO~TaKt0SNVApZdT31kJ6VROYymlyen8Yq-veQ-BBdYtKqz0uNhUhc1sDXCPHazkUDyyv5H5GsZ-JqVJggC~xrP2l68t3Obxy~n81IgKIV9sbwTl1huk0BGyH1m7Q0Gw83t5bDMczrSyNHNj5g38Z0APhyKloVS62hq2vP-ufxkacxdSWQMpBWXbZENeqRTJK5aYOuNcvBg8K2XidUdFxslx1qv~0Ff6IU2g__',
      name: 'News One',
      pdfUrl: 'https://example.com/news-one.pdf',
    },
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
      <Box sx={{ bgcolor: 'white', p: 2, mb: 5, borderRadius: "5px" }}>
        {/* Heading */}
        <Typography variant="h4" component="h1" gutterBottom sx={{ pl: 1 }}>
          Filters
        </Typography>

        {/* Filter Row */}
        <Grid container spacing={2} mb={2}>
          <Grid item xs={12} sm={6} md={3}>
            <InputField placeholder="Search Name" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField placeholder="Select Status" />
          </Grid>
          <Grid item xs={6} sm={3} md={1.5}>
            <CustomFilledButton title="Search" />
          </Grid>
          <Grid item xs={6} sm={3} md={1.5}>
            <CustomOutlinedButton title="Reset" />
          </Grid>
        </Grid>
      </Box>

      {/* Gap between sections */}
      <Box sx={{ mb: 5 }} />

      {/* Table Container */}
      <Box sx={{ bgcolor: 'white', borderRadius: "5px" }}>
        {/* Table Heading */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 4 }}>
          <Typography variant="h6">E-paper List</Typography>
          <Typography variant="h6">Showing 1-1 of 1</Typography>
        </Box>

        {/* Table */}
        <TableContainer component={Paper} sx={{ width: '100%', borderRadius: 0 }}>
          <Table>
            <TableHead sx={{ bgcolor: '#D9D9D9' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                <TableCell sx={{ fontWeight: 'bold', width: '20%' }}>MEDIA</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>PDF</TableCell>
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
                        width="100"
                        style={{ borderRadius: '4px' }}
                      />
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>
                      <Tooltip title="Download PDF">
                        <IconButton component="a" href={row.pdfUrl} target="_blank" rel="noopener noreferrer">
                          <DownloadIcon />
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

export default Epaper;
