import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image } from 'react-native';
import ArtistBox from './ArtistBox'
export default class ArtistList extends Component {

  constructor(props){
    super(props);
    
  }

  render(){
    const DATA = this.props.artists;

    const renderItem = ({ item }) => (
      <ArtistBox name={item.name} image={item.image}/>
    );

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
  
}

const styles = StyleSheet.create({
  artistBox: {
    margin: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .1,
    shadowOffset: {
        height: 1,
        width: -2
    },
    elevation: 2
  },
  image: {
      width: 150,
      height: 150
  },
  info: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
  },
  name: {
      fontSize: 20,
      marginTop: 10,
      color: '#333'
  }
});