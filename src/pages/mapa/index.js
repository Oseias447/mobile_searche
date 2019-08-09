import React, {Component} from 'react';
import {
  View,
  TouchableHighlight,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
  StyleSheet
} from 'react-native';

import MapView from 'react-native-maps';

class MapaScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
       <MapView
        style={styles.map}
        loadingEnabled={true}
        region={{
        latitude: -27.6356754,
        longitude: -52.2735031,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
        }}
      >
      </MapView>

      <View style={styles.inputContainer}>

      <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate('Main')}>

          <Text style={styles.buttonText}>Voltar</Text>

      </TouchableOpacity>

      </View>
    </View>
     
    );
  }
}

export default MapaScreen;

const styles = StyleSheet.create({

  container: {

    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
   },
   button: {

    height: 40,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 7,
    left: 85,
    marginBottom: 10,
    marginHorizontal: 100,

  },

  buttonText: {

    color: '#000',
    fontWeight: 'bold',

  },

  inputContainer: {

    width: '100%',
    maxHeight: 200,

  },

  input: {

    maxHeight: 200,
    backgroundColor: '#FFF',
    marginBottom: 15,
    marginHorizontal: 20,

  },
});