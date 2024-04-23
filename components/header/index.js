import {View, Text, Drawer } from 'react-native'

import estilo from './style'

export default function Header(){

    
return(

<>
<Text style={estilo.tituloCard}>Atividade</Text>

<Text style={estilo.tituloCard}>Descrição</Text>

<Text style={estilo.tituloCard}>Porcentagem </Text>

<Text style={estilo.titulo}>Mega Esfiha</Text>

<Text style={estilo.subtitulo}></Text>

<View style={{width:'95%', flexDirection: 'row', marginTop: 20, alignItems:'center', justifyContent:"space-between" }}>



</View>

</>

)

}