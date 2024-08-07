import React from 'react';
import { Box, TextField, Button, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { Height } from '@mui/icons-material';

const Input = styled('input')({
  display: 'none',
});

const SiteSettings = () => {
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
          <Grid item xs={12} md={4}>
            <TextField fullWidth label="News API Key" defaultValue="1005dba8645464deec9c75f6ed0978a0c5" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField fullWidth label="Google Analytics Code" placeholder="Enter Google analytic code" />
          </Grid>

          {/* Third Row */}
          <Grid item xs={12} md={12}>
            <Typography variant="h6">Website Logo</Typography>

            <div style={{ display: 'inline-flex' }}>
              <Input accept="image/*" id="upload-website-logo" type="file" />
              <img
                style={{ width: '70px', height: '40px', margin: '10px' }}
                src="https://s3-alpha-sig.figma.com/img/5191/68d6/eec0eb636ad844512548905226d898d3?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y3YPVPCpYcU3tJsp09KVrzb-cXUQEGslJcgGqQew99gO4rq5Dqm0PFlEdZ~yfoZIr54v~qTI5EpcET0m9hgy4RXeiA~36U1kAkWRuRw9y7EElTU8-HSQmv5tH1EyMtN45ySEgujAzA~Ch9p-S0mZxd6wm76rkvl61d0VfvXaRbe673~oBaZz7CLCz~7I~lu7LTHHmoADOya7wh8BipIu~7kM9ml2-kjWGMtCrWXuuhMeIK1rvbNVokce32cCxzLXJZWgUreFZK9Uj3we2tqavw5OenatxBI7qV3lrNGO0Re41EoGqpdjVCXdI5zCPILw~uvnZ1TDNC7N0kZDtRdixw__"
                alt=""
              />

              <Button variant="contained" style={{ margin: '20px' }} component="span">
                Upload website Logo
              </Button>
            </div>
            <Typography variant="caption" display="block" style={{ marginLeft: '110px' }}>
              Resolution 512x512
            </Typography>
          </Grid>

          <Grid item xs={12} md={12}>
            <Typography variant="h6">Website Admin Logo</Typography>

            <div style={{ display: 'inline-flex' }}>
              <Input accept="image/*" id="upload-website-logo" type="file" />
              <img
                style={{ width: '70px', height: '40px', margin: '10px' }}
                src="https://s3-alpha-sig.figma.com/img/5191/68d6/eec0eb636ad844512548905226d898d3?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y3YPVPCpYcU3tJsp09KVrzb-cXUQEGslJcgGqQew99gO4rq5Dqm0PFlEdZ~yfoZIr54v~qTI5EpcET0m9hgy4RXeiA~36U1kAkWRuRw9y7EElTU8-HSQmv5tH1EyMtN45ySEgujAzA~Ch9p-S0mZxd6wm76rkvl61d0VfvXaRbe673~oBaZz7CLCz~7I~lu7LTHHmoADOya7wh8BipIu~7kM9ml2-kjWGMtCrWXuuhMeIK1rvbNVokce32cCxzLXJZWgUreFZK9Uj3we2tqavw5OenatxBI7qV3lrNGO0Re41EoGqpdjVCXdI5zCPILw~uvnZ1TDNC7N0kZDtRdixw__"
                alt=""
              />

              <Button variant="contained" style={{ margin: '20px' }} component="span">
                Upload Website Admin Logo
              </Button>
            </div>
            <Typography variant="caption" display="block" style={{ marginLeft: '110px' }}>
              Resolution 512x512
            </Typography>
          </Grid>

          <Grid item xs={12} md={12}>
            <Typography variant="h6">Website Favicon</Typography>

            <div style={{ display: 'inline-flex' }}>
              <Input accept="image/*" id="upload-website-logo" type="file" />
              <img
                style={{ width: '70px', height: '60px', margin: '10px' }}
                src="https://s3-alpha-sig.figma.com/img/7ba9/4bcb/7d94999ff38eee668b996355ce72affb?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lRU6c8PEsROZ~-MzdHGVlQcEiwXD8ngPomMwANglCGEIdjqaOmHWK22g1nOsUS2hBWpvbXy2Hh1jDpq2FgBQthtvTiTZe-y8-X8BrmXgGHqkLa9Q0V4PXG5-31xeyBog7hCvvu8tBiyu4jAU3k3vjfZrQbD~DyGk-WAgKPtl8JPUUQ43dAvsLvPag1pw5sT6ppoVlD46~~CHJPRPWGyKak6HIJvIh5ISanLwAtyGkEZKD7Lp8mcU4z34nfLAjFeakpo~vHC95HVuvKWvQkhBLAviSwruwfcv-OjlKN5SFpUC6aYIBYq~Zg3JM2eXWCfd1~UN4ADS6L32DoUx7AgnlA__"
                alt=""
              />

              <Button variant="contained" style={{ margin: '20px' }} component="span">
                Upload Website Favicon
              </Button>
            </div>
            <Typography variant="caption" display="block" style={{ marginLeft: '110px' }}>
              Resolution 512x512
            </Typography>
          </Grid>

          {/* Buttons Row */}
          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              Save
            </Button>
            <Button variant="outlined" sx={{ ml: 2 }}>
              Back
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default SiteSettings;
