import { Button } from '@rneui/themed';
import React from 'react';
import { StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import config from 'react-native-ultimate-config';
import { useDispatch } from 'react-redux';

import searchSlice from '../slices/search';

export default function SelectLocationScreen({ navigation, route }) {
  const selectionType = route.params?.selectionType;
  const dispatch = useDispatch();

  const onSelect = (details) => {
    const value = {
      lat: details.geometry.location.lat,
      long: details.geometry.location.lng,
      name: details.name,
    };

    if (selectionType === 'departure') {
      dispatch(searchSlice.actions.setDepartureLocation(value));
    } else if (selectionType === 'arrival') {
      dispatch(searchSlice.actions.setArrivalLocation(value));
    } else {
      throw new Error('Unknown selection type');
    }
  };

  return (
    <>
      <GooglePlacesAutocomplete
        placeholder="Search"
        autoFillOnNotFound={false}
        fetchDetails
        onFail={console.warn}
        onNotFound={console.warn}
        onPress={(_, details) => onSelect(details)}
        query={{
          key: config.REACT_NATIVE_MAP_API_KEY,
        }}
      />
      <Button
        onPress={navigation.goBack}
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
