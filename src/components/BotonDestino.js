import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const WIDTH = Dimensions.get('window').width;

export const BotonDestino = function(props){    
    return (
        <TouchableOpacity onPress={() => {}} style={styles.container}>
            <View style={styles.leftCol}>
                <Text style={{fontSize:8}}></Text>
            </View>
            <View style={styles.centerCol}>
                <Text style={styles.textcenterCol}>Hacia donde va a ir?</Text>
            </View>
            <View style={styles.rightCol}>
                {/* <Ionicons name="md-car" color="#000000" size={25} style={{ alignSelf:'center'}}/> */}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        zIndex:9,
        position:'absolute',
        flexDirection:'row',
        width:(WIDTH-40),
        height:60,
        top:110,
        left:20,
        borderRadius:2,
        backgroundColor:'white',
        alignItems:'center',
        shadowColor:'#000000',
        elevation:7,
        shadowRadius:5,
        shadowOpacity: 1.0,
    },
    leftCol:{
        flex:1,
        alignItems:'center',
    },
    centerCol:{
        flex:1,
    },
    rightCol:{
        flex:1,
        borderLeftWidth:1,
        borderColor:'#ededed',
    },
    textcenterCol:{
        fontFamily:'sans-serif-thin',
        fontSize:21,
        color:'#545454'
    }
})