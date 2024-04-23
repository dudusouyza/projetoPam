import {StyleSheet} from 'react-native'

const estilo = StyleSheet.create({

cardTarefa: {

marginTop: 100,

backgroundColor: 'white',

width: '100%',

height: 225,

alignItems:'center',

justifyContent:'space-between',

borderRadius: 30,

borderColor: 'black',

borderWidth: 5,

flexDirection: 'row',

padding: 25,

shadowColor: '#000',

shadowOffset: { width: 5, height: 7 },

shadowOpacity: 0.10,

shadowRadius: 2,

elevation: 5,


},

tituloCard: {

fontSize: 15,

fontWeight: 'bold',

color: '#1d3557',

},

textoCard: {

fontSize: 10,

marginTop: 5,

},

imagemCard: {

width: 100,

height: 100,

marginRight: 15,

},

});

export default estilo;