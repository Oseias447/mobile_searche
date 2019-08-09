import React, { Component } from 'react';
import { 
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Keyboard 
} from 'react-native';

import { 
  Container, 
  Header, 
  Left, 
  Right, 
  Body, 
  Title, 
  Icon,
  Button, 
  View, 
  Fab, 
  List, 
  ListItem, 
  Thumbnail, 
  Text, 
  Badge, 
  Content, 
  Tab, 
  Tabs, 
  TabHeading, 
  Card, 
  CardItem,
  Form,
  Item,
  Input,
  Footer
 } from 'native-base';

import 'react-native-gesture-handler';

import firebase from 'react-native-firebase';

export default class LoginScreen extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      isAuthenticated: false
    }
  }

  validaCampo = () => {
    const { email, password } = this.state;
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(email == "") {
      alert('Informe um e-mail');
    }
    else if (reg.test(email) === false) {
      alert('Informe um e-mail válido')
    }
    else if (password == "") {
      alert('Informe uma senha');
    }
    else {
      this.login();
    }

    Keyboard.dismiss();
  }

  componentDidMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
          this.props.navigation.navigate('Main');
      } else {
        this.props.navigation.navigate('Auth');
      }
    });
  };

  // saveUser = async (username) => {
  //   await AsyncStorage.setItem('@Sessao:username', username);
  // }

  login = async () => {
    const { email, password } = this.state;

    try {
      const user = await firebase.auth()
      .signInWithEmailAndPassword(email, password);

      this.setState({ isAuthenticated: true });
    }
    catch(erro) {
      alert(erro);
    }
  }

  render() {
    return (
      <Container style={{flex: 1}}>
        <ScrollView>
        <Header androidStatusBarColor="#0d73dd" style={styles.header}>
          <Left style={{ left: 10 }}>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Main')}>
              <Icon type="Ionicons" name="ios-close" style={{color: '#fff', fontSize: 37}}/>
            </TouchableOpacity>
          </Left>
          <Body style={{alingItems: 'center'}}>
            <Title style={{right: 15, fontWeight: 'bold'}}>Entrar</Title>
          </Body>
        </Header>
        <Content>
          <View style={{ top: 30, left: 65 }}>
            <Button style={{ height: 30}}>
                <Text>Entrar com Facebook</Text>
            </Button>
            
            <Text style={{ top: 40, left: 20, fontSize: 14, color: 'blue'}}>Ou entre com seu e-mail</Text>
          </View>
          <Form style={{ marginHorizontal: 30, marginTop: 100 }}>
            <Item>
              <Input 
              placeholder="Email" 
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              />
            </Item>
            <Item>
              <Input 
              placeholder="Senha"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              secureTextEntry={true}
              />
            </Item>
          </Form>
          <TouchableOpacity style={styles.buttonLogin} onPress={()=> this.validaCampo()}>
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableOpacity>
        </Content>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "rgb(10, 100, 250)",
  },
  buttonLogin: {
    marginBottom: 10,
    height: 45,
    left: 8,
    backgroundColor: 'green',
    alignSelf: 'stretch',
    marginHorizontal: 37,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  }
});