import React from 'react'
import { Box, TextField, Button, Typography, Grid, Paper } from '@mui/material';

function ShareSetting() {
  return (
    <Box p={4}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Grid container spacing={2}>
          {/* First Row */}
          <Grid item xs={12} md={4}>
            <TextField fullWidth label="Website Admin Name" defaultValue="Admin Good News" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField fullWidth label="Email From" defaultValue="info@incite.com" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField fullWidth label="Powered By" defaultValue="All Rights Reserved Powered by Incite." />
          </Grid>

          {/* Second Row */}
          <Grid item xs={12} md={4}>
            <TextField fullWidth label="Preferred Site Language" defaultValue="English" />
          </Grid>


          
        </Grid>
      
      </Paper>
      </Box>
  )
}

export default ShareSetting