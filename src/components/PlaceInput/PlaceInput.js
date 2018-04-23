import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const placeInput = (props) => {
    return (
        <View style={styles.InputContainer} >
          <TextInput
            // style={{ width: 200 }} 
            placeholder="An example text"
            value={props.text}           
            onChangeText={props.textChanged}
            style={styles.placeInput}
          />
          <Button 
          title="Add" 
          style={styles.placeButton}
          onPress={props.buttonPressed}/>          
        </View> 
    );
};

export default placeInput;

const styles = StyleSheet.create({
    InputContainer: {
      // flex: 1,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    placeInput: {
      width: "70%"
    },
    placeButton: {
    width: "30%"
    }
});