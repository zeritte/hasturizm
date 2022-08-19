import {Button, SearchBar} from '@rneui/themed';
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
//search bar kullan
export default function ({navigation}) {
  const [search, setSearch] = useState('');
  const updateSearch = search => {
    setSearch(search);
  };
  return (
    <View>
      <Text>Select Location Screen</Text>
      <SearchBar
        placeHolder="Type here"
        onChangeText={updateSearch}
        value={search}
        lightTheme={true}
        text={search}
      />
      <Button
        onPress={() => navigation.navigate('SearchInsideStack')}
        style={styles.button}
        flexWrap="wrap"
        title="Select"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
});
