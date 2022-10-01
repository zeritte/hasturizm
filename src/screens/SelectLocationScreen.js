import { Button } from '@rneui/themed';
import React from 'react';
import { StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import config from 'react-native-ultimate-config';
import { useDispatch } from 'react-redux';

import searchSlice from '../slices/search';

export default function SelectLocationScreen({ navigation }) {
  const dispatch = useDispatch();

  return (
    <>
      <GooglePlacesAutocomplete
        placeholder="Search"
        autoFillOnNotFound={false}
        fetchDetails
        onFail={console.warn}
        onNotFound={console.warn}
        onPress={(data, details = null) => {
          console.log(data, details.geometry.location);
          dispatch(searchSlice.actions.setArrivalLocation({
            lat: details.geometry.location.lat,
            long: details.geometry.location.lng,
          }));
        }}
        query={{
          key: config.REACT_NATIVE_MAP_API_KEY,
        }}
      />
      <Button
        onPress={() => navigation.navigate('SearchInsideStack')}
        style={styles.button}
        flexWrap="wrap"
        title="Select"
      />
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
});
