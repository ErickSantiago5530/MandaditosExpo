import React from 'react';
import { View,Text,Platform,Dimensions,StyleSheet,TouchableOpacity,Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

const WIDTH = Dimensions.get('window').width;
const HEIGTH = Dimensions.get('window').heigth;

export default class MenuDrawer extends React.Component{
    navLink(nav,text){
        return(
            <TouchableOpacity style={{height:50}} onPress={() => {this.props.navigation.navigate(nav)}}>
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        )
    }
    render(){
        return(
            <View style={styles.container}>
                <ScrollView style={styles.scroller}>
                    <View style={styles.topLinks}>
                        <View style={styles.profile}>
                            <View style={styles.imgView}>
                                <Image style={styles.img} source={require('../../assets/profile.jpg')}/>
                            </View>
                            <View style={styles.profileText}>
                                <Text style={styles.name}>Wero</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.buttonLinks}>
                        {this.navLink('Inicio','Dashboard')}
                        {this.navLink('configuracionnegocio','Vincular Negocio')}
                        {this.navLink('configuracionperfil','Editar Perfil')}
                        {this.navLink('formaspago','Formas de Pago')}
                        {this.navLink('historialproductos','Historial de Productos')}
                        {this.navLink('centroayuda','Centro Ayuda')}
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <Text style={styles.description}>Mandaditos</Text>
                    <Text style={styles.version}>v1.0</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'lightgray'
    },
    scroller:{
        flex:1
    },
    topLinks:{
        height:160,
        backgroundColor: 'black'
    },
    buttonLinks:{
        flex:1,
        backgroundColor:'white',
        paddingTop:10,
        paddingBottom:450,
    },
    link:{
        flex:1,
        fontSize:20,
        padding:6,
        paddingLeft:14,
        margin:5,
        textAlign:'left'
    },
    profile:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        paddingTop:25,
        borderBottomWidth:1,
        borderBottomColor: '#777777',
    },
    imgView:{
        flex:1,
        paddingLeft:20,
        paddingRight:20
    },
    img:{
        height:70,
        width:70,
        borderRadius:50
    },
    profileText:{
        flex:3,
        flexDirection:'column',
        justifyContent:'center'
    },
    name:{
        fontSize:20,
        paddingBottom:5,
        color: 'white',
        textAlign:'left'
    },
    menudrawer:{
        paddingTop:40,
        color:'white'
    },
    footer:{
        height:50,
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor:'white',
        borderTopWidth:1,
        borderTopColor:'lightgray'
    },
    version:{
        flex:1,
        textAlign:'right',
        marginRight:20,
        color:'gray'
    },
    description:{
        flex:1,
        marginLeft:20,
        fontSize:16
    }
})
