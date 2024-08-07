import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import InputField from '../../components/InputField';
import { CustomFilledButton, CustomOutlinedButton } from '../../components/Button';

function Email() {
  return (
    <Box p={3}>

      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={4}  >
            <InputField
              placeholder="smtp"
              label="Mailer"
              type="password"
              sx={{ width: "90%", }}

            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} >
            <InputField
              placeholder="smtp.googlemail.com"
              label="Host"
              sx={{ width: "90%", }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} >
            <InputField
              placeholder="465"
              label="Port"
              sx={{ width: "90%", }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} >
            <InputField
              label="Username"
              placeholder="socialtechnofox@gmail.com"
              sx={{ width: "90%", }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} >
            <InputField
              label="Password"
              placeholder="dcnxvaeqrmrcovpl"
              sx={{ width: "90%", }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} >
            <InputField
              label="Encrytion"
              placeholder="ssl"
              sx={{ width: "90%", }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} >
            <InputField
              label="From Name"
              placeholder="Incite"
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

export default Email