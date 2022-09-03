import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const MALATYA_LOCATION = {latitude: 38.355363, longitude: 38.333525}
const ANKARA_LOCATION = {latitude: 39.866667, longitude: 32.866667}
const INITIAL_DELTAS = {latitudeDelta: 0.0922, longitudeDelta: 0.0421}

initialRegion = {... MALATYA_LOCATION, ... INITIAL_DELTAS}

export default function () {
  return (
    <View>
      <Text>Map Screen</Text>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
      >
        <Polyline
          coordinates={[MALATYA_LOCATION, ANKARA_LOCATION]}
          strokeColor="red"
          strokeWidth={6}
        />
        <Marker
          coordinate={MALATYA_LOCATION}
          title={'title'}
          description={'Malatya'}
        />
        <Marker
          coordinate={ANKARA_LOCATION}
          title={'title'}
          description={'Ankara'}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    height: '100%'
  }
});
