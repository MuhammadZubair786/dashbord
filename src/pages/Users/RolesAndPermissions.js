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
} from '@mui/material';

function RolesAndPermissions() {
    // Sample data array
    const sampleData = [
        {
            id: 1,
            name: 'Admin User',
            role: 'Administrator',
        },
        {
            id: 2,
            name: 'Editor User',
            role: 'Editor',
        },
    ];

    return (
        <Container>
            {/* Gap between sections */}
            <Box sx={{ mb: 5 }} />

            {/* Table Container */}
            <Box sx={{ bgcolor: 'white', borderRadius: "5px" }}>
                {/* Table Heading */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 4 }}>
                    <Typography variant="h6">Roles and Permissions</Typography>
                    <Typography variant="h6">Showing {sampleData.length}-{sampleData.length} of {sampleData.length}</Typography>
                </Box>

                {/* Table */}
                <TableContainer component={Paper} sx={{ width: '100%', borderRadius: 0 }}>
                    <Table>
                        <TableHead sx={{ bgcolor: '#D9D9D9' }}>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>NAME</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>ROLE</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sampleData.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={3} sx={{ textAlign: 'center', color: 'red' }}>
                                        Record Not Found
                                    </TableCell>
                                </TableRow>
                            ) : (
                                sampleData.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell>{row.id}</TableCell>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>{row.role}</TableCell>
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

export default RolesAndPermissions;
