import React  from "react";
import { Text, StyleSheet, View, Image, FlatList } from "react-native";
import Header from "../../components/Header";
import Card from "../../components/Card";
import ROTINAS from "./../../data/index"

export default function App() {
  return (
    <View style={estilo.container}>
      <Header></Header>
      <View style = {{width:'100%'}}>
     <FlatList
     data = {ROTINAS.slice(0,3)}
     keyExtractor = {(item)=>item.id}
     horizontal = {true}
     renderItem = {({item}) => (
       <Card
       titulo = {item.titulo}
       Imagem = {item.Imagem}
       descrição = {item.descrição}
       />
     )}
     
     contentzContainerStyle={estilo.lista}
     />
     </View>
     <View style = {{width:'100%'}}>
     <FlatList
     data = {ROTINAS.slice(3,6)}
     keyExtractor = {(item)=>item.id}
     horizontal = {true}
     renderItem = {({item}) => (
       <Card
       titulo = {item.titulo}
       Imagem = {item.Imagem}
       descrição = {item.descrição}
       />
     )}
     
     contentzContainerStyle={estilo.lista}
     />
     </View>
     
     <View style = {{width:'100%'}}>
     <FlatList
     data = {ROTINAS.slice(6,9)}
     keyExtractor = {(item)=>item.id}
     horizontal = {true}
     renderItem = {({item}) => (
       <Card
       titulo = {item.titulo}
       Imagem = {item.Imagem}
       descrição = {item.descrição}
       />
     )}
    
     contentzContainerStyle={estilo.lista}
     />
     </View>

     <View style = {{width:'100%'}}>
     <FlatList
     data = {ROTINAS.slice(9,12)}
     keyExtractor = {(item)=>item.id}
     horizontal = {true}
     renderItem = {({item}) => (
       <Card
       titulo = {item.titulo}
       Imagem = {item.Imagem}
       descrição = {item.descrição}
       />
     )}
 
     contentzContainerStyle={estilo.lista}
     />
     </View>


     <View style = {{width:'100%'}}>
     <FlatList
     data = {ROTINAS.slice(12,15)}
     keyExtractor = {(item)=>item.id}
     horizontal = {true}
     renderItem = {({item}) => (
       <Card
       titulo = {item.titulo}
       Imagem = {item.Imagem}
       descrição = {item.descrição}
       />
     )}
   
     contentzContainerStyle={estilo.lista}
     />
     </View>
    </View>



  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "#90E0EF",
    paddingHorizontal: 20,
  },
  tit: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 20,
    flexDirection: 'row'
  },

  titulo: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 20,
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
  },

  cardTarefa: {
    marginTop: 50,
    backgroundColor: "#A8DADC",
    width: "100%",
    height: 125,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 2,
    flexDirection: "row",
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 6,
  },

  tituloCard: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1d3557",
  },

  textoCard: {
    fontSize: 10,
    marginTop: 5,
  },

  imagemCard: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
});