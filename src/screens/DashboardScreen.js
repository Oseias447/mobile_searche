import React, { Component } from 'react';

import { 
  StyleSheet,
  View, 
  Text,
  TouchableOpacity,
  ScrollView
 } from 'react-native';

import HeaderTab from './HeaderTabNavigation';
import { Container, Fab, Card, CardItem, Left, Thumbnail, Body, Button } from 'native-base';

export default class DashboardScreen extends Component {
 
    render() {
        return (
          <HeaderTab />
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