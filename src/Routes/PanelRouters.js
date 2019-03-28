import React from 'react';

const Dashboard = React.lazy(() => import('./../components/Dashboard'))
const Settings = React.lazy(() => import('./../views/UserInterfacePage/SettignsView'))
const Profile = React.lazy(() => import('./../views/UserInterfacePage/ProfileView'))

const routes = [
  
  { path: '/account/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/account/settings', exact: true,  name: 'Settings', component: Settings },
  { path: '/account/profile', exact: true,  name: 'Profile', component: Profile },
  
];

export default routes;
