import { Box, Button, Grid, styled, Typography } from '@mui/material'
import React, { useState } from 'react';
import ToggleButton from '../../components/ToggleButton';
import { CustomFilledButton, CustomOutlinedButton } from '../../components/Button';


const CustomButton = styled(Button)({
  borderRadius: "4px",
  backgroundColor: "#1F09FF"
})


function LiveandENews() {
  const [Enablebtn, setEnablebtn] = useState(true)

  return (
    <Box>
      <Grid item xs={12} md={12}>
        <Typography sx={{ color: "#000000", fontWeight: "500", fontSize: "13px" }}>Live News Image</Typography>
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
              Upload Live News Image
            </CustomButton>
            <Typography variant="caption" display="block" sx={{ color: "#000000", fontWeight: "500" }}>
              Resol
            </Typography>
          </Box>
        </Box>
        <Box>
          <ToggleButton value={Enablebtn} handleChange={() => setEnablebtn(!Enablebtn)} onLabel={"OFF"} offLabel={"Live News Status"} />
        </Box>
      </Grid>
      <Grid item xs={12} md={12}>
        <Typography sx={{ color: "#000000", fontWeight: "500", fontSize: "13px" }}>Live News Image</Typography>
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
              Upload Epaper Image
            </CustomButton>
            <Typography variant="caption" display="block" sx={{ color: "#000000", fontWeight: "500" }}>
              Resolution 512x512
            </Typography>
          </Box>
        </Box>
        <Box>
          <ToggleButton value={Enablebtn} handleChange={() => setEnablebtn(!Enablebtn)} onLabel={"OFF"} offLabel={"Live News Status"} />
        </Box>

      </Grid>
   
      <Grid item xs={12} sx={{ mt: 5 }}>
          <Box sx={{ display: "Flex", justifyContent: "left" }}>
            <CustomFilledButton title={"Save"} />
            <Box sx={{ mx: 2 }} />
            <CustomOutlinedButton title={"Back"} />
          </Box>
        </Grid>

    </Box>
  )
}

export default LiveandENews