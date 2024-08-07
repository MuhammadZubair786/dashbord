import { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouterLink, matchPath, useLocation } from 'react-router-dom';
// material
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, List, Collapse, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';
//
import Iconify from './Iconify';

// ----------------------------------------------------------------------

const ListItemStyle = styled((props) => <ListItemButton disableGutters {...props} />)(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: 'relative',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
}));

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

// ----------------------------------------------------------------------
NavItem.propTypes = {
  item: PropTypes.object.isRequired,
  active: PropTypes.func.isRequired,
};

function NavItem({ item, active }) {
  const theme = useTheme();
  const { pathname } = useLocation();

  const isActiveRoot = active(item.path);
  const { title, path, icon, info, children } = item;
  const [open, setOpen] = useState(isActiveRoot);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const activeRootStyle = {
    color: 'white',
    fontWeight: 'fontWeightMedium',
    bgcolor: '#9D94F5',
  };

  const activeSubStyle = {
    color: 'white',
    fontWeight: 'fontWeightMedium',
    bgcolor: '#9D94F5',
  };

  if (children) {
    return (
      <>
        <ListItemStyle
          onClick={handleOpen}
          sx={{
            pr: 2,
            color: 'black',
            bgcolor: isActiveRoot ? '#F8F8F8' : 'inherit',
          }}
        >
          <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
          <ListItemText
            disableTypography
            primary={title}
            sx={{ color: 'black', fontWeight: '500' }}
          />
          {info && info}
          <Iconify
            icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
            sx={{ width: 16, height: 16, ml: 1 }}
          />
        </ListItemStyle>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map((childItem) => {
              const { title, path } = childItem;
              // Match only if the entire pathname matches the path of the sub-item
              const isActiveSub = matchPath({ path, end: true }, pathname);

              return (
                <ListItemStyle
                  key={title}
                  component={RouterLink}
                  to={path}
                  sx={{
                    ...(isActiveSub && activeSubStyle),
                  }}
                >
                  <ListItemIconStyle>
                    <Box
                      component="span"
                      sx={{
                        width: 8,
                        height: 8,
                        display: 'flex',
                        borderRadius: '50%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: isActiveSub ? 'white' : 'text.disabled',
                        transition: (theme) => theme.transitions.create('transform'),
                      }}
                    />
                  </ListItemIconStyle>
                  <ListItemText
                    disableTypography
                    primary={title}
                    sx={{
                      color: isActiveSub ? 'white' : 'black',
                      fontWeight: '500',
                    }}
                  />
                </ListItemStyle>
              );
            })}
          </List>
        </Collapse>
      </>
    );
  }

  return (
    <ListItemStyle
      component={RouterLink}
      to={path}
      sx={{
        color: 'black',
        ...(isActiveRoot && activeRootStyle),
      }}
    >
      <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
      <ListItemText
        disableTypography
        primary={title}
        sx={{
          color: isActiveRoot ? 'white' : 'black',
          fontWeight: '500',
        }}
      />
      {info && info}
    </ListItemStyle>
  );
}


export default function NavSection({ navConfig, ...other }) {
  const { pathname } = useLocation();

  const match = (path) => (path ? !!matchPath({ path, end: false }, pathname) : false);

  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {navConfig.map((item) => (
          // console.log(item)
          <NavItem key={item.title} item={item} active={match} />
        ))}
      </List>
    </Box>
  );
}
