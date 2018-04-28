import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ListItems from './src/components/ListItems/ListItems';
import PlaceInput from './src/components/PlaceInput/PlaceInput'
import placeImage from './src/assets/lacaulaIsland.jpg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

export default class App extends React.Component {
  state = {
    placeName: '',
    places: [],
    selectedPlace: null
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
          return {
            places: prevState.places.concat(
              {
                key: Math.random(), 
                name: prevState.placeName,
                // image: placeImage
                image: {
                  uri: "https://r-ec.bstatic.com/images/hotel/max1024x768/121/121784003.jpg"
                }
              }
            )
          }
        }
      )
    }
  }


  placeSelectedHandler = (key) => {
   this.setState(
      (prevState) => {
        return {
          selectedPlace: prevState.places.find((place) => {            
            return place.key === key;
          })
        }
      }
    );    
  }

  placeDeletedHandler = (key) => {
    this.setState(
      (prevState) => {
        return {
          places: prevState.places.filter((place) => {
            return place.key !== prevState.selectedPlace.key;
          }),
          selectedPlace: null
        }
      }
    );
  }

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  }

  render() {
    
    return (
      <View style={styles.container}> 

        <PlaceDetail 
        selectedPlace={this.state.selectedPlace}
        onItemDeleted={this.placeDeletedHandler}
        onModalClosed={this.modalClosedHandler}/>

        <PlaceInput 
        text={this.state.placeName}
        textChanged={this.placeNameChangedHandler}
        buttonPressed={this.placeSubmitHandler}
        />
                
        <ListItems 
        places={this.state.places} 
        onItemSelected={this.placeSelectedHandler}/>
        
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
