import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1212',
      padding: 20,
    },
    input: {
      height: 45,
      backgroundColor: '#fff',
      alignSelf: 'stretch',
      borderColor: '#0054',
      borderWidth: 1,
      paddingHorizontal: 20,
      marginBottom: 10,
      borderRadius: 5,
    },
    buttonLogin: {
      marginBottom: 10,
      borderRadius: 5,
      height: 45,
      backgroundColor: '#7755FF',
      alignSelf: 'stretch',
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonCadastro: {
      borderRadius: 5,
      height: 45,
      backgroundColor: '#121232',
      alignSelf: 'stretch',
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonText: {
      color: '#FFF',
      fontWeight: 'bold',
    },
    icon: {
      marginBottom: 35,
      alignItems: 'center',
    }
  });

  export default styles;