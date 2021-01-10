import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image } from 'react-native';
import {Actions} from 'react-native-router-flux';


const Item = ({ name, image }) => (
  <View style={styles.artistBox}>
        <Image style={styles.image} source={{uri: image}}/>
        <View style={styles.info}>
          <Text style={styles.name} onPress={()=>{Actions.detalles({image,name})}}>{name}</Text>
        </View>
</View>
);

const App = (props) => {
  
  const DATA = props.artists;
  
  const renderItem = ({ item }) => (
    <Item name={item.name} image={item.image}/>
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

export default App;