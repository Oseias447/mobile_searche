import React, { Fragment } from 'react';
import { Container, Header, Left, Right, Body, Title, Button, Icon, View, Fab, List, ListItem, Thumbnail, Text, Badge, Content, Tab, Tabs, TabHeading, Card, CardItem } from 'native-base';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

const Descobrir = ({ Imoveis }) => (
    <Content>
     {Imoveis.map(Imovel => (
     <Card key={Imovel.id}>
       <CardItem>
         <Left>
           <Body>
             <Text>{Imovel.title}</Text>
             <Text note>{Imovel.address}</Text>
           </Body>
         </Left>
				 <Right>
					 <TouchableOpacity>
					 		<Icon type="Ionicons" name="md-heart" style={{color: '#1219', fontSize: 27}} ></Icon>
					 </TouchableOpacity>
				 </Right>
       </CardItem>
       <CardItem cardBody>
         <Image source={{ uri: Imovel.cover_image_url}} style={{height: 200, width: null, flex: 1}}/>
       </CardItem>
       <CardItem>
         <Left>
					 <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: 90, right: 10 }}>
             <Text>R$</Text>
             <Text>{Imovel.total}</Text>
					 </View>
         </Left>
       </CardItem>
       <CardItem>
        	<Left>
						<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around'}} >
							<Text style={{ right: 10 }}>{Imovel.terreno}</Text>
							<Text style={{ right: 5 }}>{Imovel.quartos} Quartos</Text>
							<Text>{Imovel.banheiros} Banheiros</Text>
							<Text style={{ left: 5 }}>{Imovel.vaga} Vagas</Text>
						</View>
          </Left>
       </CardItem>
     </Card>))}
   </Content>
 );

 export default Descobrir;