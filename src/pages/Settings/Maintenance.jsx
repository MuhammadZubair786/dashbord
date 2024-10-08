import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import InputField from '../../components/InputField';
import { CustomFilledButton, CustomOutlinedButton } from '../../components/Button';
import ToggleButton from '../../components/ToggleButton';

function Maintenance() {

  const [Enablebtn, setEnablebtn] = useState(true)

  return (
    <Box p={3}>

      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={12} sx={{ my: 1 }}>
            <ToggleButton value={Enablebtn} handleChange={() => setEnablebtn(!Enablebtn)} onLabel={"Enable Maintenance Mode"} offLabel={"Disable Maintenance Mode"} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}  >
            <InputField
              label="Maintainance Title"
              placeholder="Server under maintenance"
              type="password"
              sx={{ width: "90%", }}

            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} sx={{}}
          >
            <InputField
              label="Maintainance Short Text"
              placeholder="We are sorry for troubleshooting. We will be back to you with relevant experience."
              sx={{ width: "90%", }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} sx={{ mt: 6 }}>
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

export default Maintenance