import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import InputField from '../../components/InputField';
import { CustomFilledButton, CustomOutlinedButton } from '../../components/Button';
import ToggleButton from '../../components/ToggleButton';

function FacebookAds() {
  const [Enablebtn, setEnablebtn] = useState(true)

  return (
    <Box p={3}>

      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={12} sx={{ mb: 1 }}>
            <ToggleButton value={Enablebtn} handleChange={() => setEnablebtn(!Enablebtn)} onLabel={"Enable Facebook Ads"} offLabel={"Disable Facebook Ads"} />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}  >
            <InputField
              label="Facebook Ads Placement Id Android"
              placeholder="861162831476588_1343353103257556"
              sx={{ width: "90%", }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} >
            <InputField
              label="Facebook Ads Placement Id IOS"
              placeholder="Enter Facebook Ads Placement Id IOS"
              sx={{ width: "90%", }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} >
            <InputField
              label="Facebook Ads App Token"
              placeholder="ca-app-pub-3940256099942544/4411468910"
              sx={{ width: "90%", }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} >
            <InputField
              label="Facebook Ads Frequency"
              placeholder="2"
              sx={{ width: "90%", }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} >
            <InputField
              label="Facebook Ads Interstitial Id Android"
              placeholder="861162831476588_1343353036590896"
              sx={{ width: "90%", }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} >
            <InputField
              label="Facebook Ads Interstitial Id IOS"
              placeholder="Facebook Ads Interstitial Id IOS"
              sx={{ width: "90%", }}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={12}>
            <Box sx={{ display: "Flex", justifyContent: "left" }}>
              <CustomFilledButton title={"Save"} />
              <Box sx={{ mx: 2 }} />
              <CustomOutlinedButton title={"Back"} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box >)
}

export default FacebookAds;