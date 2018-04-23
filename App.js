import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ListItems from './src/components/ListItems/ListItems';
import PlaceInput from './src/components/PlaceInput/PlaceInput'

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
    
    return (
      <View style={styles.container}> 

        <PlaceInput 
        text={this.state.placeName}
        textChanged={this.placeNameChangedHandler}
        buttonPressed={this.placeSubmitHandler}
        />        
        <ListItems places={this.state.places}/>
        
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
  }
});
