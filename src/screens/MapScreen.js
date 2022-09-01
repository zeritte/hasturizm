/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";

export default function () {
  return (
    <View>
      <Text>Map Screen</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 38.355363,
          longitude: 38.333525,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    height: "100%"
  }
});
