import React, { Fragment, Component } from 'react';
import { 
  Container, 
  Header, 
  Left, 
  Right, 
  Body, 
  Title, 
  Button, 
  Icon, 
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
  CardItem
 } from 'native-base';

import { Image, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

import { 
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
 } from 'react-native-popup-menu';

import firebase from 'react-native-firebase';

const Imoveis = [
  { id: 1, title: 'Imóvel comercial', address: 'Rua Nelson Ehlers, 37 - Centro', total: '297.339', cover_image_url: 'http://www.pedromariano.com.br/vista.imobi/fotos/27469/iPc907lU_2746959516f0fa56a2.jpg', terreno: '38 m²', vaga: 1 },
  { id: 2, title: 'Apartamento', address: 'Rua Pedro Aita, 655 - José Bonifácio', total: '750.000', cover_image_url: 'https://odis.homeaway.com/odis/listing/4bdfcb2f-1bc1-4d09-9f2c-b4fcc27ac289.f10.jpg', terreno: '237 m²', vaga: 2, quartos: 3, banheiros: 2 },
  { id: 3, title: 'Casa', address: 'Rua José Martinez, - De Lazzer', total: '194.000', cover_image_url: 'http://www.silvanoimoveis.com.br/viasw/fotos/3734_30039.jpg', terreno: '75-80 m²', vaga: 2, quartos: 2, banheiros: 1 },
  { id: 4, title: 'Apartamento', address: 'Progresso', total: '83.980', cover_image_url: 'https://imganuncios.mitula.net/predio_c_apartamento_e_sala_comercial_garagem_4680007536324875169.jpg', terreno: '60 m²', vaga: 1, quartos: 1, banheiros: 1 },
];

import Descobrir from  '../pages/descobrir';
import Favoritos from  '../pages/favoritos';
import Mensagens from  '../pages/mensagens';
import Checkout from  '../pages/checkout';

class HeaderTab extends Component {

  state = {
    isAuthenticated: false
  };

  componentDidMount() {
    this.checkIfLoggedIn();
  }
  
  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.setState({ isAuthenticated: true });
        } else {
          this.setState({ isAuthenticated: false });
        }
    });
  };
  
  signOutUser = async () => {
    try {
        await firebase.auth().signOut();
    } catch (e) {
        console.log(e);
    }
  }
  
    render() {
      return(
        <Container>
          <Header androidStatusBarColor="#0d73dd" style={styles.header} hasTabs>
            <Left>
              <Icon type="FontAwesome" name="home" style={{color: '#fff'}}/>
            </Left>
            <Body style={{alingItems: 'center'}}>
              <Title style={{right: 15}}>Busca Imóveis</Title>
            </Body>
            <Right>
              <Menu>
                <MenuTrigger>
                  <Icon type="Ionicons" name='md-more' style={{color: '#fff', marginRight: 7}} />
                </MenuTrigger>
                <MenuOptions>
                  <MenuOption text='Ver imóveis no mapa' customStyles={{ optionText: styles.text}} onSelect={()=> this.props.navigation.navigate('Mapa')} />
                  { this.state.isAuthenticated ? <MenuOption text='Sair' customStyles={{ optionText: styles.text}} onSelect={()=> this.signOutUser()} /> :  null }
                </MenuOptions>
              </Menu>
            </Right>
          </Header>
          <View style={styles.container}>
          <Tabs>
            <Tab heading={<TabHeading style={styles.tabHeading} ><Text>Descobrir</Text></TabHeading>}>
              <Descobrir Imoveis={Imoveis} />
              <Fab
                direction="up"
                position="bottomRight"
                style={{ backgroundColor: "rgb(30, 120, 250)"}}
              >
              <Icon type="Ionicons" name="ios-search" style={{fontSize: 30 }} />
              </Fab>
            </Tab>
            <Tab heading={<TabHeading style={styles.tabHeading} ><Text>Favoritos</Text></TabHeading>}>
              <Favoritos />
            </Tab>
            <Tab heading={<TabHeading style={styles.tabHeading} ><Text>Mensagens</Text></TabHeading>}>
              { this.state.isAuthenticated ? <Mensagens /> :  <Checkout /> }
            </Tab>
          </Tabs>
          </View>
        </Container>
      );
    }
}

export default withNavigation(HeaderTab);

const styles = StyleSheet.create({
  tabHeading: {
    backgroundColor: "rgb(10, 100, 250)",
  },
  header: { 
    backgroundColor: "rgb(10, 100, 250)",
  },
  container: {
    flex: 1,
  },
  text: {
    color: '#000'
  },
});