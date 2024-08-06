import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Box, Button, TextField, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// components
import CategoryList from '../components/CategoryList';
import CategoryTable from '../components/CategoryTable';

import Page from '../components/Page';
import Iconify from '../components/Iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
  AppLoginChart,
  AppUserStatics,
} from '../sections/@dashboard/app';
// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();

  const rows = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-MB8Fpvp40mR6m856c5sKfsAQLxwhZ15oXOpEXl_LbAeDcGacnnrw0DOmIztSNOARvgY&usqp=CAU',
      mainCategories: 159,
      fat: 6.0,
      name: "Entertainment",
      blogCount: 4,
      mostSelected: 4
    },
    {
      image: 'https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.webp',
      mainCategories: 237,
      fat: 9.0,
      name: "Tech",
      blogCount: 10,
      mostSelected: 4

    },
    {
      image: 'https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?size=626&ext=jpg&ga=GA1.1.1393156666.1720775880&semt=sph',
      mainCategories: 262,
      fat: 16.0,
      name: "Tech",
      blogCount: 6,
      mostSelected: 6
    },
    {
      image: 'https://img.freepik.com/free-vector/science-lab-objects_23-2148488312.jpg?size=626&ext=jpg&ga=GA1.1.1393156666.1720775880&semt=sph',
      mainCategories: 305,
      fat: 3.7,
      name: "Science",
      blogCount: 4,
      mostSelected: 8
    },
    {
      image: 'https://img.freepik.com/free-vector/science-lab-objects_23-2148488312.jpg?size=626&ext=jpg&ga=GA1.1.1393156666.1720775880&semt=sph',
      mainCategories: 356,
      fat: 16.0,
      name: "Science",
      blogCount: 3,
      mostSelected: 4
    }
  ];

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl" sx={{
        backgroundColor: "#F8F7FA"
      }}>


        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Blogs" total={123} icon={'ant-design:menu-outlined'}
              sx={{ color: '#1F09FF', backgroundColor: "rgba(234, 232, 253, 1)" }}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Quotes" total={0} icon={'ant-design:container-outlined'}
              color='error'
              sx={{ color: "#FF9F43", backgroundColor: "rgba(255, 159, 67, 0.2)" }}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Categories" total={7} icon={'ant-design:appstore-outlined'}
              sx={{ color: "#EA5455", backgroundColor: "rgba(234, 84, 85, 0.2)" }}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Users" total={765} color="error" icon={'ant-design:user'} sx={{ backgroundColor: "rgba(0, 207, 232, 0.2)", color: "#00CFE8" }} />
          </Grid>

          <Grid container item xs={12} md={6} lg={12} sx={{ my: 5, mx: 0, p: 0 }}>

            <Grid item xs={12} md={6} lg={4.5} sx={{ backgroundColor: "white", p: 2, borderRadius: "6px", }}>
              <Box sx={{ mb: 5 }}>
                <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>
                  User by login methods
                </Typography>
              </Box>
              <AppLoginChart data={[60, 40]} labels={["Google", "E-mail"]} colors={["#EA4335", "#28DAC6"]} />
            </Grid>

            <Grid item xs={12} md={6} lg={7} sx={{ backgroundColor: "white", p: 2, borderRadius: "6px", ml: 2 }}>
              <Box sx={{ mb: 5 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box>
                    <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>
                      User Statistics
                    </Typography>
                  </Box>
                  <Box>
                    <OutlinedInput
                      value={"2024-07-01 00:00 to 2024-07-18 00:00"}
                      placeholder=""
                      sx={{
                        height: "40px",
                        border: "1px solid #00000040",
                        '&.Mui-focused': {
                          border: "none", // Remove border on focus
                          outline: "none", // Remove outline on focus
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'transparent', // Make the default border transparent
                        },
                        '& .MuiOutlinedInput-root': {
                          '&.Mui-focused fieldset': {
                            borderColor: 'transparent', // Remove border on focus
                            outline: "none", // Remove outline on focus
                          },
                        },
                        fontSize: "10px",
                        width: "200px",
                        mx: 1
                        // borderRadius: "0px"
                      }}
                    />
                    <Button
                      sx={{
                        backgroundColor: "#7367F0",
                        color: "white",
                        height: "40px",
                        '&:hover': {
                          backgroundColor: "#7367F0", // Maintain the same background color on hover
                          boxShadow: 'none', // Remove any potential shadow effect
                        },
                      }}
                    >
                      <SearchIcon />
                    </Button>
                  </Box>
                </Box>
              </Box>
              <AppUserStatics />
            </Grid>
          </Grid>

        </Grid>

        <Grid item xs={12} md={12} lg={12} sx={{ my: 4, backgroundColor: "white", m: 0, borderRadius: "5px" }}>
          {/* <Box> */}
          <Typography sx={{ px: 2, pt: 4, pb: 2, fontSize: "20px", fontWeight: "500" }}>
            Most Views Blogs
          </Typography>
          {/* </Box> */}
          <CategoryTable rows={rows} />
        </Grid>

        <Grid item xs={12} md={12} lg={12} sx={{ my: 4, backgroundColor: "white", borderRadius: "5px" }}>
          {/* <Box> */}
          <Typography sx={{ px: 2, pt: 4, pb: 2, fontSize: "20px", fontWeight: "500" }}>
            Most Selected Categories
          </Typography>
          {/* </Box> */}
          <CategoryTable rows={rows} />
        </Grid>


        <Box sx={{ display: "none" }}>
          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Website Visits"
              subheader="(+43%) than last year"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Current Visits"
              chartData={[
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.chart.blue[0],
                theme.palette.chart.violet[0],
                theme.palette.chart.yellow[0],
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Conversion Rates"
              subheader="(+43%) than last year"
              chartData={[
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Current Subject"
              chartLabels={['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math']}
              chartData={[
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/static/mock-images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Order Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '1983, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Traffic by Site"
              list={[
                {
                  name: 'FaceBook',
                  value: 323234,
                  icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} height={32} />,
                },
                {
                  name: 'Google',
                  value: 341212,
                  icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} height={32} />,
                },
                {
                  name: 'Linkedin',
                  value: 411213,
                  icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} height={32} />,
                },
                {
                  name: 'Twitter',
                  value: 443232,
                  icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} height={32} />,
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Create FireStone Logo' },
                { id: '2', label: 'Add SCSS and JS files if required' },
                { id: '3', label: 'Stakeholder Meeting' },
                { id: '4', label: 'Scoping & Estimations' },
                { id: '5', label: 'Sprint Showcase' },
              ]}
            />
          </Grid>
        </Box>

      </Container>
    </Page>
  );
}
