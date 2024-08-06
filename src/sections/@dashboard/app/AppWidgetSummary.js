// @mui
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Box, Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
// components
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

const IconWrapperStyle = styled('div')(({ theme }) => ({
  // margin: 'auto',
  display: 'flex',
  borderRadius: '5px',
  // borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(5),
  height: theme.spacing(5),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  marginRight: theme.spacing(3),
}));

// ----------------------------------------------------------------------

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  sx: PropTypes.object,
};

export default function AppWidgetSummary({ title, total, icon, color = 'primary', sx, ...other }) {
  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: 'center',
        padding: 2,
        borderRadius: "5px",
        // color: color,
        // color: (theme) => theme.palette[color].darker,
        // bgcolor: (theme) => theme.palette[color].lighter,
        // ...sx, 
      }}
      {...other}
    >
      <Box sx={{ display: "flex", justifyContent: "start" }}>

        <IconWrapperStyle
          sx={{
            // border: "1px solid red",
            ...sx
            // color: color,
            // color: (theme) => theme.palette[color].dark,
            // backgroundImage: (theme) =>
            // `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(
            //   theme.palette[color].dark,
            //   0.24
            // )} 100%)`,
          }}
        >
          <Iconify icon={icon} width={24} height={24} />
        </IconWrapperStyle>

        <Typography variant="h3" sx={{ color: "black" }}>{fShortenNumber(total)}</Typography>
      </Box>

      <Typography variant="subtitle2" sx={{ opacity: 0.72, color: "black" }}>
        {title}
      </Typography>
    </Card >
  );
}
