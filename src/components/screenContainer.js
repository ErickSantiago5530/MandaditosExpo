import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from './src/components/loginView';
import Feed from './src/components/feedView';
import Dashboard from './src/components/dashboardView';

const NavigationStack = createStackNavigator({
    Login: { 
        screen: Login,
    },
    Dashboard: { 
        screen: Dashboard,
    },
});
const Container = createAppContainer(NavigationStack);

export default Container; 