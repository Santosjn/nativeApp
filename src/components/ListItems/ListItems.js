import React from 'react';

import { View, StyleSheet } from 'react-native';

import ListItem from '../ListItem/ListItem';

export const listItems = (props) => {
    const placesOutput = props.places.map((place, index) => {
      // return <Text key={index}>{place}</Text>;
      return <ListItem key={index} placeName={place}/>
    });

    return(
      <View style={styles.listContainer}>
         {placesOutput}
      </View>
    );
};

export default listItems;

const styles = StyleSheet.create({
  listContainer: {
    width: "100%" 
  }
});
  