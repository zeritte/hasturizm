import React from 'react';
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

    navigation.goBack();
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
    </>
  );
}

