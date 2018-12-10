import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//This is a stateless functional component (it can only be one line)
//const Header =(props) => <Text>{ props.textIwant }</Text>

//This is a stateful functional component 
class Header extends React.Component {

    constructor(props){ // Set state up. 
        super(props); // Run state
        // How we create properties 
        this.textIwant = props.textIwant;
        // How we create state
        this.state = {
            number: 0
        };

        // boiler plate to write when adding function 
        this.addNumberWhenPressed = this.addNumberWhenPressed.bind(this);
        // this simple action is all within the component 
    
    }


    componentDidUpdate(){ // any state changed, run the function inside this
        console.log(this.state.number);
        // this is to run the number 
    }


    addNumberWhenPressed () { // how we manipulate state 
        const previousNumber = this.state.number; // variable that store current state 
        // we created a variable called previous number ^ we can put in different data types 
        // in this case, integer. currently prev number = 0 
        this.setState({ // function to change the state 
                // this set state allow us to manipulate the data. 
                number: previousNumber + 1

        })

    }
    render() {
        return (
            <Text onPress={this.addNumberWhenPressed}>{this.textIwant}</Text>
            // anything that is inside stateful component must have 'this.'
            // if user press on the text, we must create a variable
            // now we cannot see the number so we need consolog 
        );
}
}




export default Header;