import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  state = {
    placeName: '',
    places: []
  }

  placeNameChangedHandler = (event) => {    
    this.setState({
      placeName: event
    });
  };

  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === '') { return; } 
    else {
      this.setState( 
        (prevState) => {
          return {places: prevState.places.concat(prevState.placeName)}
        }
      )
    }
  }

  render() {
    const placesOutput = this.state.places.map((place, index) => {
      return <Text key={index}>{place}</Text>;
    });

    return (
      <View style={styles.container}>
        <View style={styles.InputContainer} >
          <TextInput
            // style={{ width: 200 }} 
            placeholder="An example text"
            value={this.state.placeName}           
            onChangeText={this.placeNameChangedHandler}
            style={styles.placeInput}
          />
          <Button 
          title="Add" 
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}/>          
        </View> 
        <View>
          {placesOutput}
        </View>
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
