import {View, Text} from 'react-native'

import estilo from './style'

export default function Header(){

    
return(

<>

<View style={estilo.tit}>
<Text style= {estilo.tit1}>Inicio</Text>
<Text style= {estilo.tit1}>Promoções</Text>
<Text style= {estilo.tit1}>Pedidos</Text>
</View>

<View style={{width:'95%', flexDirection: 'row', marginTop: 20 }}>



</View>

<Text style={estilo.tituloCard}></Text>

<Text style={estilo.tituloCard}></Text>

<Text style={estilo.tituloCard}></Text>

<Text style={estilo.titulo}>Mega Esfiha</Text>

<Text style={estilo.subtitulo}></Text>

<View style={{width:'95%', flexDirection: 'row', marginTop: 20, alignItems:'center', justifyContent:"space-between" }}>



</View>

</>

)

}


