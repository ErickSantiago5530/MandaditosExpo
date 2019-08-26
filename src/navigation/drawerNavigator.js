'use strict';
import React  from 'react';
import { Platform,Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation'

import dashboardView from '../screens/dashboardView'
import centroayuda from '../screens/CentroAyuda'
import configuracionnegocio from '../screens/ConfiguracionNegocio'
import configuracionperfil from '../screens/ConfiguracionPerfil'
import formaspago from '../screens/FormasPago'
import historialproductos from '../screens/HistorialProductos'

import MenuDrawer from '../components/MenuDrawer'

const WIDTH = Dimensions.get('window').width;
const DrawerConfig = {
    drawerWidth: WIDTH*0.60,
    contentComponent: (( {navigation} )=>{
        return(<MenuDrawer navigation={navigation}/>)
    })
}
const DrawerNavigator = createDrawerNavigator(
    {
        Inicio:{
            screen:dashboardView
        },
        centroayuda:{
            screen:centroayuda
        },configuracionnegocio:{
            screen:configuracionnegocio
        },configuracionperfil:{
            screen:configuracionperfil
        },formaspago:{
            screen:formaspago
        },historialproductos:{
            screen:historialproductos
        }   

    },
    DrawerConfig
);

export default createAppContainer(DrawerNavigator);