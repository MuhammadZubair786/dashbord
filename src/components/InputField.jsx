import { styled } from '@mui/material/styles';
import { Box, OutlinedInput, Typography } from '@mui/material';
import React from 'react';

const CustomOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
    height: "40px",
    width: "200px",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    border: "1px solid #00000040", // Black border by default
    borderRadius: "4px",
    transition: "0.3s ease", // Smooth transition for border color
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#7367F0', // Border color on hover
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: '1px solid #7367F0', // Border color on focus
        outline: "none", // Remove outline on focus
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent', // Transparent default border for a cleaner look
        outline: "none", // Remove outline on focus
    },
    '&:focus': {
        outline: "none", // Remove outline on focus
    },
}));

const InputField = ({ value, placeholder, handleChange, type = "text", label, sx }) => {
    return (
        <Box mb={2}>
            {label && (
                <Typography variant="body1" gutterBottom>
                    {label}
                </Typography>
            )}
            <CustomOutlinedInput
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                type={type}
                sx={{ marginLeft: label && 0, ...sx }}
            />
        </Box>
    );
}

export default InputField;
