import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import config from 'react-native-ultimate-config';
import { useSelector } from 'react-redux';

import { arrivalLocationSelector, departureLocationSelector } from '../lib/selectors';

const INITIAL_DELTAS = { latitudeDelta: 1, longitudeDelta: 1 };

export default function MapScreen() {
  const departureLocation = useSelector(departureLocationSelector);
  const arrivalLocation = useSelector(arrivalLocationSelector);

  return (
    <View>
      <Text>Map Screen</Text>
      <MapView style={styles.map} initialRegion={{ ...departureLocation, ...INITIAL_DELTAS }}>
        <MapViewDirections
          origin={departureLocation}
          destination={arrivalLocation}
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
