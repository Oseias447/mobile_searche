import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoginSreen from './src/screens/LoginScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import Cadastro from './src/pages/Cadastro';
import Message from './src/pages/mensagens';
import MapaScreen from './src/pages/mapa';

import { MenuProvider } from 'react-native-popup-menu';

export default class App extends Component {
  render() {
    return (
      <MenuProvider>
        <AppNavigator/>
      </MenuProvider>
    );
  }
}

const Navigator = createSwitchNavigator({
  Main: {
    screen: DashboardScreen,
  },
  Auth: {
    screen: LoginSreen,
  },
  Loading: {
    screen: LoadingScreen
  },
  Registrar: {
    screen: Cadastro
  },
  Mapa: {
    screen: MapaScreen
  },
},{
    initialRouteName : 'Main'
});

const AppNavigator = createAppContainer(Navigator);
