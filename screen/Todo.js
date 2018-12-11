import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, FlatList, SectionList } from 'react-native';

const sections = [
    {
        id: 0,
        title: 'Section 1',
        data:
            [
                { id: 0, text: 'Item 1' },
                { id: 1, text: 'Item 2' }
            ]
    },

    {
        id: 1, 
        title: 'Section 2', 
        data: 
            [
                { id: 3, text: 'Item 4' }, 
                { id: 4, text: 'Item 5' }
            ]
        }
    ];

class TodoScreen extends React.Component {

    static navigationOptions = {
        title: 'Todo',
      };

      renderRow = ({ item }) =>
        (<View style={styles.header}>
            <Text>{item.text}</Text>
        </View>);

        renderSectionHeader= ({ section }) =>
        (<View style={styles.row}>
        <Text>{section.title}</Text>
        </View>);

    render() { 
        return (
            // <ScrollView>
            //     <View style={styles.container1} />
            //     <View style={styles.container2} />
            //     <View style={styles.container3} />

            // </ScrollView>
            <SectionList
                sections={sections}
                renderItem={this.renderRow}
                renderSectionHeader={this.renderSectionHeader} 
                />

                
            
            
            // flat list component requires unique values. cannot be both 'b's etc
            

            );
    }
    
}

const styles = StyleSheet.create({

    header: {
        padding: 20,
        backgroundColor: 'pink',
        margin: 3,
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white'
    },

    row: {
        padding: 15, 
        marginBottom: 5, 
        backgroundColor: 'skyblue'
    }

// container1: {
//     padding: 100, 
//     backgroundColor: 'red'
//     },

// container2: {
//     padding: 100, 
//     backgroundColor: 'yellow'
//     },

// container3: {
//     padding: 100, 
//     backgroundColor: 'orange'
//         },            

})
export default TodoScreen; 