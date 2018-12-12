import React from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, AlertIOS } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';


class FinalProjectScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            data: [
                'Eat', 'Sleep', 'Spin', 'Watch'
    
            ]
        };
    }
remove = (index) => {
    this.setState(
        prevState => {
            const data = prevState.data.slice();
            data.splice(index, 1);
            return { data };
        }
    );
};

showForm = () => {
        AlertIOS.prompt(
            'Enter  Text',
            null,
            text => this.add(text)
        );
    
}

add = (text) => {
    this.setState(
        prevState => {
            const { data } = prevState;
            return {
                data: data.concat(text),
                text: ''
            };
        }
    );
}
    renderRow = ({ item, index }) =>
    (
        <View>

        <View style={styles.row} key={index}>
        <Text>{item}</Text>
        <TouchableOpacity

            style={{
                alignItems: 'flex-end',
                justifyContent: 'center',
                borderColor: '#32CD32'
            }}

             onPress={() => this.remove(index)}
             // onPress={() => console.log(index)}
            >

            <Icon name="minus" type="font-awesome" />

        </TouchableOpacity>
    </View>
</View>
        
);

    render() {
        return (
        <View>
            <View>
        <FlatList
            data={this.state.data}
        renderItem={this.renderRow}
        keyExtractor={item => item.toString()}
        />
        </View>
        
        <View >
            <Button title="+" onPress={this.showForm} />
        </View>
        </View>
        );

    }
}
    const styles = StyleSheet.create({
        row: {

        backgroundColor: 'skyblue',
        padding: 15,
        margin: 2,
        fontSize: 30,
        fontWeight: 'bold'

        }
    })

export default FinalProjectScreen; 