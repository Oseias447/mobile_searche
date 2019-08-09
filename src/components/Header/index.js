import React, { Component } from 'react';
import { TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import {
  Left,
  Icon,
  Button,
  Right,
  Badge,
  Text,
  Header,
  View,
  Body,
  Title
} from 'native-base';
import styles from './styles';
// import firebase from 'react-native-firebase';

class HeaderNavigation extends Component {

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    })
  }

  // signOutUser = async () => {
  //   try {
  //       await firebase.auth().signOut();
  //       this.props.navigation.navigate('Loading');
  //   } catch (e) {
  //       console.log(e);
  //   }
  // }

  render() {
    const { navigation } = this.props;

    return(
      <Header style={styles.container}>
        <Left>
          <TouchableOpacity transparent onPress={() => navigation.openDrawer()} >
            <Icon name='menu' style={{color: "#000"}} />
          </TouchableOpacity>
        </Left>
          <Text style={{ flexDirection: 'row', justifyContent: 'space-between'}}>{this.props.name}</Text>
        <Right />
        <View>
          <Left style={styles.signOut}>
            <Button transparent onPress={()=> {}}>
              <FontAwesome name='exchange' size={15} style={{color: "#000", paddingRight: 10}} />
            </Button>
          </Left>
        </View>
      </Header>
    )
  }
}

export default withNavigation(HeaderNavigation);
