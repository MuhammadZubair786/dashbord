import React from 'react'
import { Box, Button, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';
import InputField from '../../components/InputField';
import { CustomFilledButton, CustomOutlinedButton } from '../../components/Button';


const CustomButton = styled(Button)({
  borderRadius: "4px",
  backgroundColor: "#1F09FF"
})

function AppSettings() {
  return (
    <Box p={4}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Grid container spacing={2}>

          <Grid item xs={12} md={4}>
            <InputField label="Website Admin Name" placeholder="Admin Good News" sx={{ width: "100%" }} />
          </Grid>


          <Grid item xs={12} md={12}>
            <Typography sx={{ color: "#000000", fontWeight: "500", fontSize: "13px" }}>App Logo</Typography>
            <Box sx={{ display: "flex" }}>
              <Box>
                <img
                  style={{ width: '70px', height: '40px', margin: '10px' }} // Adjusted margin
                  src="https://s3-alpha-sig.figma.com/img/5191/68d6/eec0eb636ad844512548905226d898d3?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y3YPVPCpYcU3tJsp09KVrzb-cXUQEGslJcgGqQew99gO4rq5Dqm0PFlEdZ~yfoZIr54v~qTI5EpcET0m9hgy4RXeiA~36U1kAkWRuRw9y7EElTU8-HSQmv5tH1EyMtN45ySEgujAzA~Ch9p-S0mZxd6wm76rkvl61d0VfvXaRbe673~oBaZz7CLCz~7I~lu7LTHHmoADOya7wh8BipIu~7kM9ml2-kjWGMtCrWXuuhMeIK1rvbNVokce32cCxzLXJZWgUreFZK9Uj3we2tqavw5OenatxBI7qV3lrNGO0Re41EoGqpdjVCXdI5zCPILw~uvnZ1TDNC7N0kZDtRdixw__"
                  alt=""
                />
              </Box>
              <Box sx={{ ml: 2 }}>

                {/* <InputField accept="image/*" id="upload-website-logo" type="file" /> */}
                <CustomButton variant="contained" style={{ margin: '10px 0' }} component="span">
                  Upload Website Logo
                </CustomButton>
                <Typography variant="caption" display="block" sx={{ color: "#000000", fontWeight: "500" }}>
                  Resolution 512x512
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography sx={{ color: "#000000", fontWeight: "500", fontSize: "13px" }}>App Splash Screen</Typography>
            <Box sx={{ display: "flex" }}>
              <Box>
                <img
                  style={{ width: '70px', height: '40px', margin: '10px' }}
                  src="https://s3-alpha-sig.figma.com/img/5191/68d6/eec0eb636ad844512548905226d898d3?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y3YPVPCpYcU3tJsp09KVrzb-cXUQEGslJcgGqQew99gO4rq5Dqm0PFlEdZ~yfoZIr54v~qTI5EpcET0m9hgy4RXeiA~36U1kAkWRuRw9y7EElTU8-HSQmv5tH1EyMtN45ySEgujAzA~Ch9p-S0mZxd6wm76rkvl61d0VfvXaRbe673~oBaZz7CLCz~7I~lu7LTHHmoADOya7wh8BipIu~7kM9ml2-kjWGMtCrWXuuhMeIK1rvbNVokce32cCxzLXJZWgUreFZK9Uj3we2tqavw5OenatxBI7qV3lrNGO0Re41EoGqpdjVCXdI5zCPILw~uvnZ1TDNC7N0kZDtRdixw__"
                  alt=""
                />
              </Box>
              <Box sx={{ ml: 2 }}>
                <CustomButton variant="contained" style={{ margin: '10px 0' }} component="span">
                  Upload App Splash Screen
                </CustomButton>
                <Typography variant="caption" display="block" sx={{ color: "#000000", fontWeight: "500" }}>
                  Resolution 512x512
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography sx={{ color: "#000000", fontWeight: "500", fontSize: "13px" }}>Rectangular App Logo</Typography>
            <Box sx={{ display: "flex" }}>
              <Box>
                <img
                  style={{ width: '70px', height: '60px', margin: '10px' }}
                  src="https://s3-alpha-sig.figma.com/img/7ba9/4bcb/7d94999ff38eee668b996355ce72affb?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lRU6c8PEsROZ~-MzdHGVlQcEiwXD8ngPomMwANglCGEIdjqaOmHWK22g1nOsUS2hBWpvbXy2Hh1jDpq2FgBQthtvTiTZe-y8-X8BrmXgGHqkLa9Q0V4PXG5-31xeyBog7hCvvu8tBiyu4jAU3k3vjfZrQbD~DyGk-WAgKPtl8JPUUQ43dAvsLvPag1pw5sT6ppoVlD46~~CHJPRPWGyKak6HIJvIh5ISanLwAtyGkEZKD7Lp8mcU4z34nfLAjFeakpo~vHC95HVuvKWvQkhBLAviSwruwfcv-OjlKN5SFpUC6aYIBYq~Zg3JM2eXWCfd1~UN4ADS6L32DoUx7AgnlA__"
                  alt=""
                />
              </Box>
              <Box sx={{ ml: 2 }}>
                <CustomButton variant="contained" style={{ margin: '10px 0' }} component="span">
                  Upload Rectangular App Logo
                </CustomButton>
                <Typography variant="caption" display="block" sx={{ color: "#000000", fontWeight: "500" }}>
                  Resolution 512x512
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={12} sx={{ display: "flex", my: 3 }}>
            <Box>
              <Box>
                <Typography>
                  Primary Color
                </Typography>
              </Box>
              <Box sx={{ border: "1px solid #00000040", p: 1, borderRadius: "4px", width: "300px" }}>
                <Box sx={{ backgroundColor: "black", width: "100%", height: "15px" }} />
              </Box>
            </Box>
            <Box sx={{ ml: 4 }}>
              <Box>
                <Typography>
                  Secondary Color
                </Typography>
              </Box>
              <Box sx={{ border: "1px solid #00000040", p: 1, borderRadius: "4px", width: "300px" }}>
                <Box sx={{ backgroundColor: "black", width: "100%", height: "15px" }} />
              </Box>
            </Box>

          </Grid>


          <Grid item xs={12} md={4} sx={{ mt: 4 }}>
            <InputField label="Support Email" placeholder="Support@gmail.com" sx={{ width: "100%" }} />
          </Grid>

          <Grid item xs={12} sx={{ mt: 3 }}>
            <Box sx={{ display: "Flex", justifyContent: "left" }}>
              <CustomFilledButton title={"Save"} />
              <Box sx={{ mx: 2 }} />
              <CustomOutlinedButton title={"Back"} />
            </Box>
          </Grid>

        </Grid>
      </Paper>
    </Box>
  )
}

export default AppSettings