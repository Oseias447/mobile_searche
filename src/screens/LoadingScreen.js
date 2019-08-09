import React, { Component } from 'react';

import { 
  StyleSheet,
  View, 
  Text,
  ActivityIndicator
 } from 'react-native';

// import firebase from 'react-native-firebase';

export default class LoadingScreen extends Component {

    componentDidMount() {
      // this.checkIfLoggedIn();
    }

    // checkIfLoggedIn = () => {
    //   firebase.auth().onAuthStateChanged(user => {
    //     if (user) {
    //         this.props.navigation.navigate('Main');
    //     } else {
    //       this.props.navigation.navigate('Auth');
    //     }
    //   });
    // };

    render() {
        return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
        </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BB12',
    padding: 20,
  },
});