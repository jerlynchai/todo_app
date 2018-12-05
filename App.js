import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './component/Header';
import { Avatar } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Header textIwant={'byebye'} />
      {/* <Header textIwant={'Hello World'} /> */}
      <Avatar
      rounded
      source={{uri: "https://cdn.pixabay.com/photo/2017/02/03/13/54/unicorn-2035174_960_720.png"}}
      xlarge
      onPress={() => console.log("Unicorn!")}
      activeOpacity={0.5}/>
      
        <Text style={styles.bigblue}>Hellooooooooo!!!!</Text>
        <Button title={'Jerlyn'} 
        onPress={() => {console.log ('happy'); }} 
        color="purple"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4E1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
