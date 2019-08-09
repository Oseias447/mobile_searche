import React, { Fragment, Component } from 'react';
import { Container, Header, Left, Right, Body, Title, Button, Icon, View, Fab, List, ListItem, Thumbnail, Text, Badge, Content, Tab, Tabs, TabHeading, Card, CardItem } from 'native-base';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

class Checkout extends Component {


	render() {
		return(
			<Container style={{
					flex: 1,
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'stretch',
					backgroundColor: 'rgb(10, 180, 255)'
				}}>
					<View style={{height: 300, backgroundColor: 'white', margin: 20}} >
							<Text style={{ marginHorizontal: 20, top: 10, fontWeight: 'bold' }}>Converse com os</Text>
							<Text style={{ marginHorizontal: 20, top: 10, fontWeight: 'bold' }}>anúnciantes</Text>
							<Text style={{ marginHorizontal: 20, top: 15, fontSize: 11, color: '#bbaa90' }}>Crie ou acesse sua conta para</Text>
							<Text style={{ marginHorizontal: 20, top: 15, fontSize: 11, color: '#bbaa90' }}>visualizar e escrever mensagens</Text>
	
					<View style={{ margin: 20, top: 10, left: 15, alignItems: 'center', justifyContent: 'center' }}>
							<TouchableOpacity style={{ 
									height: 30, 
									top: 15,
									right: 22, 
									backgroundColor: 'white', 
									borderWidth: 1, 
									borderColor: 'rgb(10, 150, 230)', 
									alignItems: 'center', 
									justifyContent: 'center',
									}} onPress={ () => this.props.navigation.navigate('Registrar')}>
									<Text style={{ color: 'rgb(10, 150, 230)'}}> CADASTRAR COM EMAIL </Text>
							</TouchableOpacity>
							
							<View style={{ right: 19, top: 30 }}>
									<TouchableOpacity onPress={ () => this.props.navigation.navigate('Auth')}>
											<Text style={{ color: 'rgb(10, 150, 230)', fontWeight: 'bold' }}>JÁ TENHO CONTA</Text>
									</TouchableOpacity>
							</View>
					</View>
	
					</View>
			</Container>
			);
    }
}
  

export default withNavigation(Checkout);