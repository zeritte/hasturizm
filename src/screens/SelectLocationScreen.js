import { Button, SearchBar } from "@rneui/themed";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import config from "react-native-ultimate-config";

export default function ({ navigation }) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  return (
    // <View>
    //   <Text>Select Location Screen</Text>

      <GooglePlacesAutocomplete
        placeholder="SearchMalatya"
        autoFillOnNotFound={false}
        fetchDetails={true}
        onFail={console.warn}
        onNotFound={console.warn}
        onPress={(data, details = null) => {
          setLatitude(details.geometry.location.lat);
          setLongitude(details.geometry.location.lng);    
          console.log(data, details.geometry.location);
          console.log(details.geometry.location.lat);
          console.log(details.geometry.location.lng);
        }}
        query={{
          key: config.REACT_NATIVE_MAP_API_KEY,
          
        }}
      />
  )
      {/* <SearchBar
        placeHolder="Type here"
        onChangeText={updateSearch}
        value={search}
        lightTheme={true}
        text={search}
      /> */}
      {/* <Button
        onPress={() => navigation.navigate("SearchInsideStack")}
        style={styles.button}
        flexWrap="wrap"
        title="Select"
      /> */}
  //   </View>
  // );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 10
  }
});
