import React, { Component, Fragment } from 'react';
import { Container, Header, Left, Right, Body, Title, Button, Icon, View, Fab, List, ListItem, Thumbnail, Text, Badge, Content, Tab, Tabs, TabHeading, Card, CardItem } from 'native-base';
import { Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

class Favoritos extends Component {

    render() {
        return(
            <ImageBackground source={{ uri: 'https://image.freepik.com/vetores-gratis/vetor-de-design-de-fundo-de-estrelas-festivas_53876-85355.jpg'}} style={{width: '100%', height: '100%'}}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Body style={{ marginBottom: 80 }}>
                        <Text style={{color: 'white' }}>Você ainda não possui </Text>
                        <Text style={{color: 'white' }}>nenhum anúncio de imóvel</Text>
                        <Text style={{color: 'white' }}>favorito!</Text>
                        <View style={{top: 20}}>
                            <Button onPress={ () => this.props.navigation.navigate('Descobrir')}>
                                <Text>Busca Imoveis agora</Text>
                            </Button>
                        </View>
                    </Body> 
                </View>
            </ImageBackground>
        );
    }
};

export default withNavigation(Favoritos);