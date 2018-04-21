import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  state = {
    placeName: ''
  }

  placeNameChangedHandler = (event) => {    
    this.setState({
      placeName: event
    });
  };

  render() {
    return (
      <View style={styles.container}>         
        <TextInput
          style={{ width: 200 }} 
          placeholder="An example text"
          value={this.state.placeName}           
          onChangeText={this.placeNameChangedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    // flexDirection: 'column',
    backgroundColor: '#fff',    
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
