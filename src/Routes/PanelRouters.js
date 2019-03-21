import React from 'react';

const Dashboard = React.lazy(() => import('./../components/Dashboard'));
const Settings = React.lazy(() => import('./../views/UserInterfacePage/SettignsView'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  
  { path: '/account/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/account/settings', exact: true,  name: 'Settings', component: Settings },
];

export default routes;
