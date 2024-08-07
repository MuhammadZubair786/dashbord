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
    path: '/dashboard/category',
    icon: getIcon('tabler:category'),
  },
  {
    title: 'Blogs',
    path: '/dashboard/Blogs',
    icon: getIcon('ic:twotone-post-add'),
  },
  {
    title: 'Rss',
    // path: '/dashboard/Rss',
    icon: getIcon('eva:file-text-fill'),
    children: [
      {
        title: 'Rss Feed',
        path: '/dashboard/Rss/feed',
      },
      {
        title: 'Rss Feed Items',
        path: '/dashboard/Rss/feed-list',
      },
    ],
  },
  {
    title: 'Ads',
    path: '/dashboard/Ads',
    icon: getIcon('material-symbols-light:dashboard'),
  },
  {
    title: 'News Api',
    path: '/dashboard/News',
    icon: getIcon('tabler:category'),
  },
  {
    title: 'Live News',
    path: '/dashboard/Live',
    icon: getIcon('ic:twotone-post-add'),
  },
  {
    title: 'E-paper',
    path: '/dashboard/E-paper',
    icon: getIcon('eva:file-text-fill'),
  },

  {
    title: 'Visibility',
    path: '/dashboard/Visibility',
    icon: getIcon('arcticons:visible'),
  },
  {
    title: 'CMS',
    path: '/dashboard/CMS',
    icon: getIcon('flowbite:users-solid'),
  },
  {
    title: 'Search Log',
    path: '/dashboard/Search',
    icon: getIcon("ic:baseline-search"),
  },
  {
    title: 'Users',
    // path: '/dashboard/user',
    icon: getIcon('flowbite:users-solid'),
    children: [
      {
        title: 'Subadmins',
        path: '/dashboard/user/subadmin',
      },
      {
        title: 'Roles&Permission',
        path: '/dashboard/user/roles',
      },
    ],
  },
  {
    title: 'Settings',
    // path: '/dashboard/products',
    icon: getIcon('ic:baseline-settings'),
    children: [
      {
        title: "All Settings",
        path: "/dashboard/setting/settings"
      },
      // {
      //   title: "Roles&Permissions",
      //   path: "/dashboard/setting/roles"
      // },
    ]
  },
  {
    title: 'Localization',
    // path: '/dashboard/blog',
    icon: getIcon('heroicons:language-solid'),
    children: [
      {
        title: "Language",
        path: "/dashboard/localization/language"
      },
      {
        title: "Translation",
        path: "/dashboard/localization/translation"
      },
    ]
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
