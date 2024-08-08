import React, { useState } from 'react'
import { Box, Typography, Grid, Paper } from '@mui/material';
import InputField from '../../components/InputField';
import { CustomFilledButton, CustomOutlinedButton } from '../../components/Button';
import ToggleButton from '../../components/ToggleButton';

function ShareSetting() {

  const [Enablebtn, setEnablebtn] = useState(false)

  return (
    <Box p={4}>
      <Paper sx={{ p: 4 }}>
        <Grid container spacing={2}>
          {/* First Row */}
          <Grid item xs={12} md={4}>
            <InputField label="Android Schema" placeholder="android://com.incite.app" sx={{ width: "100%" }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <InputField label="Playstore URL" placeholder="https://play.google.com/store/apps/details?id=com.incite.app" sx={{ width: "100%" }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <InputField label="IOS Schema"
              placeholder="IOS Schema." sx={{ width: "100%" }} />
          </Grid>

          {/* Second Row */}
          <Grid item xs={12} md={4}>
            <InputField label="Appstore URL"
              placeholder="Appstore URL" sx={{ width: "100%" }} />
          </Grid>
          <Grid item xs={12} md={10}>

            <ToggleButton value={Enablebtn} handleChange={() => setEnablebtn(!Enablebtn)} onLabel={"Enable Share Setting"} offLabel={"Disable Share Setting"} />
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

export default ShareSetting