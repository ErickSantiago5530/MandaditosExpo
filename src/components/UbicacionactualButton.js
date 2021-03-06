import React from 'react'
import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native'

// import Ionicons from 'react-native-vector-icons/Ionicons';
// import console = require('console');

// const WIDTH = Dimensions.get('window').width;
// const HEIGHT = Dimensions.get('window').height;
const { HEIGHT, WIDTH } = Dimensions.get('window') 

export const UbicacionactualButton = function(props) {
    //if props.cb is passed, use it. If not, console.log
    const cb = props.cb? props.cb: () => console.log('Callback funciton not passed to UbicacionActualButton!')
    //if porps.bottom is passed, use it. If not, set bottom to 65.
    const bottom = props.bottom ? props.bottom:65;
    return(
        <View style={[ styles.container, {top: HEIGHT-bottom }]} >
            {/* <Ionicons 
            name="my-location"
            color="#000000"
            size={25}
            onPress={()=>{ cb() }} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        zIndex:9,
        position:'absolute',
        width:45,
        height:45,
        backgroundColor:'#fff',
        left: WIDTH-70,
        borderRadius:50,
        shadowColor:"#000000",
        elevation:7,
        shadowRadius:5,
        shadowOpacity: 1.0,
        justifyContent:'space-around',
        alignItems:'center'
    },
})