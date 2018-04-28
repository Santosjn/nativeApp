import React from 'react';

import { FlatList, StyleSheet } from 'react-native';

import ListItem from '../ListItem/ListItem';

export const listItems = (props) => {
    // const placesOutput = props.places.map((place, index) => {      
    //   return <ListItem key={index} 
    //   placeName={place}
    //   onItemPressed={() => props.onItemSelected(index)}
    //   />
    // });

    // return(
    //   <ScrollView style={styles.listContainer}>
    //      {placesOutput}
    //   </ScrollView>
    // );


    return (<FlatList 
      style={styles.listContainer}
      data={props.places}
      renderItem={(info) => {            
          return <ListItem 
          placeName={info.item.name}
          placeImage={info.item.image}
          onItemPressed={() => props.onItemSelected(info.item.key)}/>
      }
      }/>
    );
      

};

export default listItems;

const styles = StyleSheet.create({
  listContainer: {
    width: "100%" 
  }
});
  