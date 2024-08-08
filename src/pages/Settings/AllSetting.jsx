import React from 'react';
import { Box, Grid, Tab, Tabs } from '@mui/material';
import SiteSettings from './SiteSettings';
import AppSettings from './AppSettings';
import ShareSetting from './ShareSetting';
import GlobalSetting from './GlobalSetting';
import TextToSpeechSetting from './TextToSpeechSetting';
import PushNotification from './PushNotification';
import Email from './Email';
import Maintenance from './Maintenance';
import FacebookAds from './FacebookAds';
import Admob from './Admob';
import LiveandENews from './LiveandENews';
import TranslationSetting from './TranslationSetting';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function AllSetting() {

  const tabOptions = [
    { name: 'Site Settings', component: <SiteSettings /> },
    { name: 'App Settings', component: <AppSettings /> },
    { name: 'Share Settings', component: <ShareSetting /> },
    { name: 'Translation Settings', component: <TranslationSetting /> },
    { name: 'Global Settings', component: <GlobalSetting /> },
    { name: 'Text-to-Speech Settings', component: <TextToSpeechSetting /> },
    { name: 'Push Notification', component: <PushNotification /> },
    { name: 'Email', component: <Email /> },
    { name: 'Maintenance', component: <Maintenance /> },
    { name: 'Live News & E-News', component: <LiveandENews /> },
    { name: 'Admob', component: <Admob /> },
    { name: 'Facebook Ads', component: <FacebookAds /> },
  ];

  // Separate states for the tab index
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };


  return (
    <Box sx={{ backgroundColor: 'white' }}>
      <Box sx={{ borderBottom: 1 }} >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          // variant="scrollable"
          // scrollButtons
          // allowScrollButtonsMobile
          TabIndicatorProps={{ sx: { display: 'none' } }}
          sx={{
            '& .MuiTabs-flexContainer': {
              flexWrap: 'wrap',
            },
          }}
          aria-label="basic tabs example"
        >
          {tabOptions && tabOptions.map((tab, index) => (
            <Tab
              key={index}
              label={tab.name}
              {...a11yProps(index)}
              sx={{
                color: "#84818F",
                fontWeight: "100",
                '&.Mui-selected': {
                  color: 'black', // Custom color for active tab
                  // fontWeight: 'bold', // Bold text for active tab
                  borderBottom: '2px solid blue', // Bottom border for active tab
                }
              }}
            />
          ))}
        </Tabs>
      </Box>

      {/* Render the tab panels */}
      {tabOptions.map((tab, index) => (
        <CustomTabPanel
          key={index}
          value={activeTab}
          index={index}
        >
          {tab.component}
        </CustomTabPanel>
      ))}
    </Box>
  );
}

export default AllSetting;
