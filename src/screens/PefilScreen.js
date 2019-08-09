import React, { Component } from 'react';

import { 
  StyleSheet,
  View, 
  Text,
  TouchableOpacity,
 } from 'react-native';

import HeaderTab from './HeaderTabNavigation';
import { Container } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class PerfilScreen extends Component {

  static navigationOptions = {

    tabBarIcon: ({ tintColor }) => (
       <Icon name='user' size={20} style={{color: tintColor}} />
    ),
    headerRight: <Icon name='exit' style={{paddingRight: 10}} />
  }

    render() {
        return (
            <Container>
              <HeaderTab />
              <Text style={styles.container}>DasboardScreen</Text>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(250,250,250)',
    padding: 20,
  }
});