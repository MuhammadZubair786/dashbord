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
import Res from './pages/Res';
import Ads from './pages/Ads';
import NewsApi from './pages/NewsApi';
import LiveNews from './pages/LiveNews';
import Epaper from './pages/Epaper';
import Visibility from './pages/Visibility';
// import CMS from './pages/CMS';
import CategoryList from './components/CategoryList';
import CMS from './pages/CMS';

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
        { path: 'blog', element: <Blog /> },
        { path: 'blogs', element: <Blogs /> },
        { path: 'category', element: <CategoryList /> },

        { path: 'Rss', element: <Res /> },
        { path: 'Ads', element: <Ads /> },
        { path: 'News', element: <NewsApi /> },
        { path: 'Live', element: <LiveNews /> },
        { path: 'E-paper', element: <Epaper /> },
        { path: 'Visibility', element: <Visibility /> },
        { path: 'CMS', element: <CMS /> },








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
