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
} from '@mui/material';
import InputField from "../components/InputField";
import { CustomFilledButton, CustomOutlinedButton } from '../components/Button';

function SearchLog() {
    const sampleData = [
        {
            id: 1,
            searchTerm: 'Sample Search Term 1',
            date: '2024-08-06',
            time: '11:00 AM',
            results: 50,
        },
        {
            id: 2,
            searchTerm: 'Sample Search Term 2',
            date: '2024-08-07',
            time: '12:00 PM',
            results: 75,
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
                        <InputField placeholder="Search Term" />
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
                    <Typography variant="h6">Search Logs</Typography>
                    <Typography variant="h6">Showing {sampleData.length}-{sampleData.length} of {sampleData.length}</Typography>
                </Box>

                {/* Table */}
                <TableContainer component={Paper} sx={{ width: '100%', borderRadius: 0 }}>
                    <Table>
                        <TableHead sx={{ bgcolor: '#D9D9D9' }}>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Search Term</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Time</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Results</TableCell>
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
                                        <TableCell>{row.searchTerm}</TableCell>
                                        <TableCell>{row.date}</TableCell>
                                        <TableCell>{row.time}</TableCell>
                                        <TableCell>{row.results}</TableCell>
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

export default SearchLog;
