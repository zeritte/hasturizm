import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import config from 'react-native-ultimate-config';

const MALATYA_LOCATION = { latitude: 38.355363, longitude: 38.333525 };
const ANKARA_LOCATION = { latitude: 39.866667, longitude: 32.866667 };
const INITIAL_DELTAS = { latitudeDelta: 0.0922, longitudeDelta: 0.0421 };

const initialRegion = { ...MALATYA_LOCATION, ...INITIAL_DELTAS };

export default function MapScreen() {
  return (
    <View>
      <Text>Map Screen</Text>
      <MapView style={styles.map} initialRegion={initialRegion}>
        <MapViewDirections
          origin={MALATYA_LOCATION}
          destination={ANKARA_LOCATION}
          apikey={config.REACT_NATIVE_MAP_API_KEY}
          strokeWidth={4}
          strokeColor="#111111"
        />
        {/* <Polyline
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
        /> */}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    height: '100%',
  },
});
