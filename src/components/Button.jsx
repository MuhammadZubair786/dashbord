import React from 'react';
import { Button, styled } from '@mui/material';

// Styled Filled Button
const FilledButton = styled(Button)({
    backgroundColor: '#7367F0', // Background color
    color: '#fff', // Text color
    width: '100px', // Button width
    height: '40px', // Button height
    borderRadius: '4px', // Border radius
    boxShadow: 'none', // Remove default MUI button shadow
    '&:hover': {
        backgroundColor: '#7367F0', // Same color on hover
    },
    '&:disabled': {
        backgroundColor: '#b0b0b0', // Disabled state background color
        color: '#f0f0f0', // Disabled state text color
    },
});

// Styled Outlined Button
const OutlinedButton = styled(Button)({
    backgroundColor: 'transparent', // Transparent background
    color: '#7367F0', // Text color
    border: '1px solid #7367F0', // Border color
    width: '100px', // Button width
    height: '40px', // Button height
    borderRadius: '4px', // Border radius
    boxShadow: 'none', // Remove default MUI button shadow
    '&:hover': {
        backgroundColor: '#e0e0ff', // Slight background change on hover
        borderColor: '#7367F0', // Keep border color on hover
    },
    '&:disabled': {
        borderColor: '#b0b0b0', // Disabled state border color
        color: '#b0b0b0', // Disabled state text color
    },
});

// Filled Button Component
function CustomFilledButton({ title, onClick, ...props }) {
    return (
        <FilledButton onClick={onClick} {...props}>
            {title}
        </FilledButton>
    );
}

// Outlined Button Component
function CustomOutlinedButton({ title, onClick, ...props }) {
    return (
        <OutlinedButton onClick={onClick} {...props}>
            {title}
        </OutlinedButton>
    );
}

// Export both components
export { CustomFilledButton, CustomOutlinedButton };
