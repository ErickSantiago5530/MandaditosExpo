import React from 'react'
import { StyleSheet,Text,View } from 'react-native'
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import { BotonDstino } from '../components/BotonDestino'
import { Ubicacionactual } from '../components/UbicacionactualButton'

export default class MapScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            region:null
        }
        this._getLocationAsync();
    }

    _getLocationAsync = async() =>{
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
            if( status!=='granted')
                console.log('Permiso a tu ubicacion denegada.')
        let location = await Location.getCurrentPositionAsync({enabledHighAccuracy:true})
        let region = {
            latitude: location.coords.altitude,
            longitude:location.coords.longitude,
            latitudeDelta: 0.045,
            longitudeDelta: 0.045,
        }
        this.setState({region:region})
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>MapScreen</Text>
                {/* <BotonDstino/> */}
                {/* <Ubicacionactual/> */}
                <MapView
                    initialRegion={this.state.region}
                    showsUserLocation={true}
                    showsCompass={true}
                    rotateEnabled={false}
                    style= {{flex:1,zIndex:0}}
                />
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
    }
})
