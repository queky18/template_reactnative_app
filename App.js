import React, { Component } from "react";
import { StyleSheet, View, } from "react-native";
import { connect } from 'react-redux';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from "./src/components/PlaceList/PlaceList";
// import placeImage from "./src/assets/competition_2100x1400.png";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import {addPlace, deletePlace, selectPlace, deselectPlace} from './src/store/actions/index';


// https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-1/c144.0.813.813a/s160x160/46221961_972315006291212_8670713817212125184_n.jpg?_nc_cat=108&_nc_ht=scontent.ftsr1-1.fna&oh=d17001d7c9eadeaf9c0e71a82d1c61c5&oe=5CCBC064
// App class
class App extends Component {

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  }

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  }

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail 
          selectedPlace={this.props.selectedPlace} 
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler} 
        />
        {/* onPlaceAdded ( which property you choose from PlaceInput to bid ) */}
        <PlaceInput onPlaceAdded={this.placeAddedHandler} /> 
        <PlaceList 
          places={this.props.places} 
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

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace : state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace : (name) => dispatch(addPlace(name)),
    onDeletePlace : () => dispatch(deletePlace()),
    onSelectPlace : (key) => dispatch(selectPlace(key)),
    onDeselectPlace : () => dispatch(deselectPlace())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);