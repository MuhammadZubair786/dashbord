import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import { CustomOutlinedButton, CustomFilledButton } from '../../components/Button'
import ToggleButton from '../../components/ToggleButton'

function TextToSpeechSetting() {
  const [Enablebtn, setEnablebtn] = useState(true)

  return (
    <Box>
      <Box>

        <Grid container>
          <Grid item xs={12} md={10} sx={{ my: 4 }}>
            <ToggleButton value={Enablebtn} handleChange={() => setEnablebtn(!Enablebtn)} onLabel={"Voice Enable"} offLabel={"Voice Disable"} />
          </Grid>


          <Grid item xs={12}>
            <Box sx={{ display: "Flex", justifyContent: "left" }}>
              <CustomFilledButton title={"Save"} />
              <Box sx={{ mx: 2 }} />
              <CustomOutlinedButton title={"Back"} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default TextToSpeechSetting