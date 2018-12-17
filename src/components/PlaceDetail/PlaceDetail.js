import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';


const placeDetail = props => {

    let modalContent = null;

    if(props.selectedPlace) {
        modalContent = (
            <View>
                <Image source={props.selectedPlace.image} style={styles.placeImage}/>
                <Text style={styles.placeText} > {props.selectedPlace.name}</Text>
            </View>
        )
    }

    return (
        <Modal onRequestClose={props.onModalClosed} visible={props.selectedPlace !== null} animationType="slide">
            <View style={styles.modalContainer}>
                {modalContent}
                <View style={styles.buttonsContainer}>
                    <Button title="Delete" color="red" onPress={props.onItemDeleted}/>
                    <Button title="Close" onPress={props.onModalClosed}/>
                </View>
            </View>
        </Modal>
    );

};

const styles = StyleSheet.create({
    modalContainer: {
        margin : 22
    },
    placeImage : {
        width : "100%",
        height : 200
    },
    placeText : {
        fontWeight : "bold",
        textAlign: "center",
        fontSize: 28,
        margin : 20
    }
})

export default placeDetail;