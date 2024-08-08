import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import InputField from '../../components/InputField';
import { CustomFilledButton, CustomOutlinedButton } from '../../components/Button';
import ToggleButton from '../../components/ToggleButton';

function Admob() {
  const [Enablebtn, setEnablebtn] = useState(true)

  return (
    <Box p={3}>

      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={12} sx={{ my: 1 }}>
            <ToggleButton value={Enablebtn} handleChange={() => setEnablebtn(!Enablebtn)} onLabel={"Enable Ads"} offLabel={"Disable Ads"} />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}  >
            <InputField
              label="Admob Banner ID Android"
              placeholder="ca-app-pub-3940256099942544/921458974"
              type="password"
              sx={{ width: "90%", }}

            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} >
            <InputField
              label="Admob Interstitial ID Android"
              placeholder="ca-app-pub-3940256099942544/8691691433"
              sx={{ width: "90%", }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} >
            <InputField
              placeholder="ca-app-pub-3940256099942544/921458974"
              label="Admob Banner ID IOS"
              sx={{ width: "90%", }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} >
            <InputField
              label="Admob Interstitial ID IOS"
              placeholder="ca-app-pub-3940256099942544/8691691433"
              sx={{ width: "90%", }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={12} >
            <InputField
              label="Admob Frequency"
              placeholder="2"
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

export default Admob