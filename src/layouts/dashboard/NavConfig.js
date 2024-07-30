// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('material-symbols-light:dashboard'),
  },
  {
    title: 'Categories',
    path: '/dashboard/user',
    icon: getIcon('tabler:category'),
  },
  {
    title: 'Blogs',
    path: '/dashboard/products',
    icon: getIcon('ic:twotone-post-add'),
  },
  {
    title: 'Rss',
    path: '/dashboard/blog',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'Ads',
    path: '/dashboard/app',
    icon: getIcon('material-symbols-light:dashboard'),
  },
  {
    title: 'News Api',
    path: '/dashboard/user',
    icon: getIcon('tabler:category'),
  },
  {
    title: 'Live News',
    path: '/dashboard/products',
    icon: getIcon('ic:twotone-post-add'),
  },
  {
    title: 'E-paper',
    path: '/dashboard/blog',
    icon: getIcon('eva:file-text-fill'),
  },
  
  {
    title: 'Visibility',
    path: '/dashboard/products',
    icon: getIcon('arcticons:visible'),
  },
  {
    title: 'CMS',
    path: '/dashboard/blog',
    icon: getIcon('flowbite:users-solid'),
  },
  {
    title: 'Search Log',
    path: '/dashboard/app',
    icon: getIcon("ic:baseline-search"),
  },
  {
    title: 'Users',
    path: '/dashboard/user',
    icon: getIcon('flowbite:users-solid'),
  },
  {
    title: 'Settings',
    path: '/dashboard/products',
    icon: getIcon('ic:baseline-settings'),
  },
  {
    title: 'Localization',
    path: '/dashboard/blog',
    icon: getIcon('heroicons:language-solid'),
  },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon('eva:lock-fill'),
  // },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon('eva:person-add-fill'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon('eva:alert-triangle-fill'),
  // },
];

export default navConfig;
