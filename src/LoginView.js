import React, { Component } from 'react';
import {Button, StyleSheet, View, Image, TextInput, Text, Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';


class LoginView extends Component{
    constructor(props) {
        super(props);

        this.state = {
            text1: "",
            text2: "",
        }
    }

    getLogin = () =>{
        if(this.state.text1.length > 0 && this.state.text2.length > 0){
            Actions.home(this.state);
        }else{
            Alert.alert('Error', 'Debe rellenar ambos campos para iniciar sesión');
        }
        
    }

    onChangeTextInput1=(text)=>{
        this.setState({text1:text});
    }
    onChangeTextInput2=(text)=>{
        this.setState({text2:text});
    }


    render(){
        return (
            <View style={styles.container}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://miracomosehace.com/wp-content/uploads/mch/id_431.jpg'
                    }}/>

                <Text>Usuario:</Text>
                <TextInput style={styles.orange}
                onChangeText={(text)=>{this.onChangeTextInput1(text)}}
                
                />
                
                <Text>Contraseña:</Text>
                <TextInput style={styles.orange} 
                onChangeText={(text)=>{this.onChangeTextInput2(text)}}/>

                <Button 
                    onPress={this.getLogin}
                    title="Presionar Aqui"
                    accessibilityLabel="Learn more about this purple button"
                    color='black'
                    />
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    tinyLogo: {
        marginTop: 50,
        marginBottom: 50,
        width: 250,
        height: 150
    },
    orange: {
        marginBottom: 30,
        width: 250,
        height: 50,
        borderColor: 'orange',
        borderWidth: 2
    },
    
});

export default LoginView;