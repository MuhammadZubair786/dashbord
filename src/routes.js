import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Blog from './pages/Blog';
import User from './pages/User';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';
// import Categories from './page s/Categories';
import Blogs from './pages/Blogs';
// import Res from './pages/RssFeed';
import Ads from './pages/Ads';
import NewsApi from './pages/NewsApi';
import LiveNews from './pages/LiveNews';
import Epaper from './pages/Epaper';
import Visibility from './pages/Visibility';
// import CMS from './pages/CMS';
import CMS from './pages/CMS';
import CategoryList from './pages/CategoryList';
import SearchLog from './pages/SearchLog';
import RssFeed from './pages/RssFeed';
import RssFeedList from './pages/RssFeedList';
import Subadmin from './pages/Users/Subadmin';
import RolesAndPermissions from './pages/Users/RolesAndPermissions';
import AllSetting from './pages/Settings/AllSetting';
import Language from './pages/Localization/Language';
import Translation from './pages/Localization/Translation';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        // { path: 'blog', element: <Blog /> },
        { path: 'blogs', element: <Blogs /> },
        { path: 'category', element: <CategoryList /> },

        { path: 'Rss/feed', element: <RssFeed /> },
        { path: 'Rss/feed-list', element: <RssFeedList /> },
        { path: 'Ads', element: <Ads /> },
        { path: 'News', element: <NewsApi /> },
        { path: 'Live', element: <LiveNews /> },
        { path: 'E-paper', element: <Epaper /> },
        { path: 'Visibility', element: <Visibility /> },
        { path: 'CMS', element: <CMS /> },
        { path: 'Search', element: <SearchLog /> },
        { path: 'user/subadmin', element: <Subadmin /> },
        { path: 'user/roles', element: <RolesAndPermissions /> },
        { path: 'setting/settings', element: <AllSetting /> },
        // { path: 'setting/roles', element: <RolesAndPermissions /> }, // same as in user
        { path: 'localization/language', element: <Language /> },
        { path: 'localization/translation', element: <Translation /> },








      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },



        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
