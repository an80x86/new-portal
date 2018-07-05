import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import { createMuiTheme } from '@material-ui/core/styles';
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import dataProvider from './dataProvider';
import Login from './login';
import NotFound from './NotFound';
import Menu from './Menu';
import bitcoinRateReducer from './bitcoinRateReducer';
import bitcoinSaga from './bitcoinSaga';
import customRoutes from './customRoutes';


const theme = createMuiTheme({
  palette: {
    type: 'light', // Switching the dark mode on is a single property value change.
  },
});


const App = () => (
  <Admin 
    customRoutes={customRoutes}
    customSagas={[ bitcoinSaga ]}
    customReducers={{ bitcoinRate: bitcoinRateReducer }}
    theme={theme}
    menu={Menu}
    catchAll={NotFound}
    title="Uyum Portal v2.0"
    dashboard={Dashboard}
    loginPage={Login} 
    authProvider={authProvider} 
    dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
      <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
);

export default App;
