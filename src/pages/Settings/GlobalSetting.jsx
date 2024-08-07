import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import InputField from '../../components/InputField';
import { CustomFilledButton, CustomOutlinedButton } from '../../components/Button';

function GlobalSetting() {
  return (
    <Box p={3}>

      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={6}  >
            <InputField
              placeholder="d-m-Y h:i A"
              label="Date Formate"
              type="date"
              sx={{ width: "90%", }}

            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} sx={{}}
          >
            <InputField
              placeholder="Asia/kolkata"
              label="Time Zone"
              sx={{ width: "90%", }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
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

export default GlobalSetting