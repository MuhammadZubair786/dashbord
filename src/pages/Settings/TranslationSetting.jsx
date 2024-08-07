import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import InputField from '../../components/InputField';
import { CustomFilledButton, CustomOutlinedButton } from '../../components/Button';

function TranslationSetting() {
  return (
    <Box p={3}>

      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={6}  >
            <InputField
              placeholder="Enter Chat GPT API Key"
              id="chat-gpt-api-key"
              label="Chat GPT API Key"
              sx={{ width: "90%",  }}

            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} sx={{  }}
          >
            <InputField
              placeholder="Enter Google Translation API Key"
              id="google-translation-api-key"
              label="Google Translation API Key"
              sx={{ width: "90%",  }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} sx={{ display: "Flex", justifyContent: "space-evenly" }}>
            <CustomFilledButton title={"Search"} />
            <CustomOutlinedButton title={"Back"} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default TranslationSetting;
