import React, { Component } from "react";
import { StyleSheet, View, } from "react-native";

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from "./src/components/PlaceList/PlaceList";
// import placeImage from "./src/assets/competition_2100x1400.png";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";

// https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-1/c144.0.813.813a/s160x160/46221961_972315006291212_8670713817212125184_n.jpg?_nc_cat=108&_nc_ht=scontent.ftsr1-1.fna&oh=d17001d7c9eadeaf9c0e71a82d1c61c5&oe=5CCBC064

export default class App extends Component {
  state = {
    places: [],
    selectedPlace : null
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key : Math.random(),
          name : placeName,
          image : {
            uri : "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-1/c144.0.813.813a/s160x160/46221961_972315006291212_8670713817212125184_n.jpg?_nc_cat=108&_nc_ht=scontent.ftsr1-1.fna&oh=d17001d7c9eadeaf9c0e71a82d1c61c5&oe=5CCBC064"
          }
        })
      };
    });
  };

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace : null
      };
    });
  }

  modalClosedHandler = () => {
    this.setState({
      selectedPlace : null
    });
  }

  placeSelectedHandler = key => {
    this.setState ( prevState => {
       return {
         selectedPlace : prevState.places.find(place => {
           return place.key === key;
         })
       };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail 
          selectedPlace={this.state.selectedPlace} 
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler} 
        />
        {/* onPlaceAdded ( which property you choose from PlaceInput to bid ) */}
        <PlaceInput onPlaceAdded={this.placeAddedHandler} /> 
        <PlaceList 
          places={this.state.places} 
          onItemSelected={this.placeSelectedHandler} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
});
