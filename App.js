import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './component/Header';
import { Avatar } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Todo from "./screen/Todo"
import Flexbox from "./screen/Flexbox"
import FinalProject from "./screen/FinalProject"


class App extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };


  render() {
    return (
      <View style={styles.container}>
      <Header textIwant={'MY FIRST APP'} />

      {/* <Header textIwant={'Hello World'} /> */}
      <View style={{ padding: 10, margin: 10, backgroundColor: 'white' }} />
      
      <Avatar
      rounded
      source={{uri: "https://cdn.pixabay.com/photo/2017/02/03/13/54/unicorn-2035174_960_720.png"}}
      xlarge
      onPress={() => console.log("Unicorn!")}
      activeOpacity={0.5}/>
      
      <View style={{ margin: 10}}/>
        <Text style={styles.bigblue}>Jerlyn</Text>
        <View style={{ margin: 5}}/>
        <Button 
        title="List"
         onPress={() => this.props.navigation.navigate('TodoScreen')}
        />

        <Button 
        title="About"
         onPress={() => this.props.navigation.navigate('FlexboxScreen')}
        />

        <Button 
        title="Final Project"
         onPress={() => this.props.navigation.navigate('FinalProjectScreen')}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: App,
    TodoScreen: Todo,
    FlexboxScreen: Flexbox, 
    FinalProjectScreen: FinalProject,   
});

const AppContainer = createAppContainer (AppNavigator);

export default AppContainer; // export default means the main function. everything will be under app navigator? 

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