import {Text, View, Image,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'


import estilo from './style'

export default function Card({porcentagem,titulo,Imagem,descrição}){

    const navigation = useNavigation()

return(

<TouchableOpacity style={estilo.cardTarefa}  onPress = {()=>{navigation.navigate("Details",{titulo:titulo,descrição:descrição,Imagem:Imagem})}}>

<Image style={estilo.imagemCard} source={{ uri: Imagem }} />

<View style={{ marginLeft: 5, width:150 }}> 

<Text style={estilo.tituloCard}>{titulo}</Text>

<Text style={estilo.textoCard}>{descrição}</Text>


</View>

<Text style={{ fontSize: 25 }}>{porcentagem}</Text>

</TouchableOpacity>

)
}