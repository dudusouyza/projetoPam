import React from 'react';
import { Text, StyleSheet, View, Image,FlatList} from 'react-native';
import { useRoute } from '@react-navigation/native';


export default function Details() {

    const route = useRoute();
  return (
    <View style={estilo.container}>
    <View style={estilo.card}>
    <View style={estilo.text}>
    <Text> {route.params.titulo}</Text>
      <Text> {route.params.descrição}</Text>
      <Image source={route.params.Imagem} style={estilo.imagem} />
    </View>
    
    </View>
     
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#red',
    paddingHorizontal: 40,
    justifyContent: 'center'
    
},
card: {
    backgroundColor: "#FF2B2B", // fundo verde
    borderRadius: 10,
    padding: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 15,
      height: 10,
    tituloCard: {


},
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center', // centraliza os itens horizontalmente
  },
  imagem: {
    width: 200,
    height: 200,
  },
 
});
