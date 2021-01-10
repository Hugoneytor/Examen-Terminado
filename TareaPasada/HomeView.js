import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux';
import {StyleSheet, Text, View, Button, Image} from 'react-native';


class HomeView extends Component{
    constructor(props) {
        super(props)
    }

    getBack = () => {
        Actions.login();
    }

    render(){
        const data = this.props.text1;
        const data2 = this.props.text2;

        return (
            <View style={styles.container}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://bepensahosting.com/cepeca%20chafa/media/bienvenido.png'
                    }}/>

                    <Text>Usuario: {data}</Text>
                    <Text style={styles.margen}>Contraseña: {data2}</Text>
               
                
                <Button 
                title= "Cerrar Sesión"
                accessibilityLabel="Learn more about this purple button"
                color='black'
                onPress = {this.getBack} 
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems:'center',
    },
    tinyLogo: {
        marginBottom: 10,
        width: 300,
        height: 100
    },
    margen:{
        marginBottom:10
    }
})

export default HomeView;