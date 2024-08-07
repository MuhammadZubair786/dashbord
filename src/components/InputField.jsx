import { styled } from '@mui/material/styles';
import { Box, OutlinedInput } from '@mui/material';
import React from 'react';

const CustomOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
    height: "40px",
    width: "200px",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    border: "1px solid #00000040", // Black border by default
    borderRadius: "4px",
    transition: " 0.3s ease", // Smooth transition for border color
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
    // transition:"all 0.5s"
}));

const InputField = ({ value, placeholder, handleChange, type = "text" }) => {
    return (
        <Box>
            <CustomOutlinedInput
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                type={type}
            />
        </Box>
    );
}

export default InputField;