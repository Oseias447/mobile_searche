import React  from 'react';

import 'react-native-gesture-handler';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import listados from './DashboardScreen';
import favoritos from './FavoritosScreen';
import perfil from './PefilScreen';

const DashboardTabNavigator = createAppContainer(createBottomTabNavigator({
  Listados: { screen: listados },
  Favoritos: { screen: favoritos },
  Perfil: { screen: perfil },
}, {
  navigationOptions:({navigation}) => {
    const {routeName} = navigation.state.routes[navigation.state.index]
    return{
      headerTitle: routeName
    }
  }
}
));

export default DashboardTabNavigator;
