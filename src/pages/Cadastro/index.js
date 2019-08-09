import React, { Component } from 'react';

import {
  StyleSheet, 
  TouchableOpacity,
  ScrollView,
  Keyboard,
 } from 'react-native';

import firebase from 'react-native-firebase';

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

export default class Cadastro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    }
  }

  validaCampo = () => {
    const { email, senha } = this.state;
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(email == "") {
      alert('Informe um e-mail');
    }
    else if (reg.test(email) === false) {
      alert('Informe um e-mail válido')
    }
    else if (senha == "") {
      alert('Informe uma senha');
    }
    else {
      this.handleCadastro();
    }

    Keyboard.dismiss();
  }

  handleCadastro = async () => {
    const { email, senha } = this.state;

    try {
    const user = await firebase.auth()
    .createUserWithEmailAndPassword(email, senha);

    this.props.navigation.navigate('Auth');

    }
    catch (err) {
      alert(err);
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
            <Title style={{right: 15, fontWeight: 'bold'}}>Nova conta</Title>
          </Body>
          </Header>
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
              value={this.state.senha}
              onChangeText={senha => this.setState({ senha })}
              secureTextEntry={true}
              />
            </Item>
          </Form>
          <TouchableOpacity style={styles.button} onPress={() => this.validaCampo()}>
            <Text style={styles.buttonText}>CADASTRAR</Text>
          </TouchableOpacity>
          </ScrollView>
          <Container style={{ flex: 1, flexDirection: 'row', marginTop: 40}}>
            <Text style={{fontSize: 14, left: 23, color: '#002010'}}>Não possui uma conta?</Text>
            <TouchableOpacity style={{ left: 65}} onPress={()=> this.props.navigation.navigate('Auth')}>
              <Text style={{fontSize: 14, color: 'blue'}}>ENTRE AQUI</Text>
            </TouchableOpacity>
        </Container>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "rgb(10, 100, 250)",
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
  button: {
    height: 45,
    backgroundColor: '#7755FF',
    alignSelf: 'stretch',
    marginTop: 40,
    left: 8,
    marginHorizontal: 38,
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