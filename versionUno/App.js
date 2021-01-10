import React, {Component} from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import Detalles from './src/Detalles';
import HomeView from './src/HomeView';
import LoginView from './src/LoginView';

const scenes = Actions.create(
    <Scene key="root">
        <Scene key="login" component={LoginView} title="Login" hideNavBar/>
        <Scene key="home" component={HomeView} title="Home" hideNavBar/>
        <Scene key="detalles" component={Detalles} title="Detalles"/>
    </Scene>
)

class App extends Component {
    render() {
        return <Router scenes={scenes}/>
    }
}

export default App;