import {Button, Card} from '@rneui/themed';
import React from 'react';
import {View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();

export default function ({navigation, props}) {
  return (
    <View>
      <Card borderRadius={30} marginTop={150}>
        {/* <Text>{props.value}</Text> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SearchLocation')}>
          <TextInput
            style={styles.text}
            inlineImageLeft="search_icon"
            placeholder="Kalkış Yeri"
            onPressIn={() => navigation.navigate('SearchLocation')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SearchLocation')}>
          <TextInput
            style={styles.text}
            placeholder="Varış Yeri"
            onPressIn={() => navigation.navigate('SearchLocation')}
          />
        </TouchableOpacity>
        <View style={styles.container}>
          <Ionicons style={styles.icon} name="calendar-outline" />
          <TouchableOpacity
            style={styles.candidate}
            onPress={() => navigation.navigate('SearchLocation')}>
            <TextInput style={styles.text} placeholder="Tarih" />
          </TouchableOpacity>
          <Ionicons style={styles.icon} name="people-outline" />
          <TouchableOpacity
            style={styles.candidate}
            onPress={() => navigation.navigate('SearchLocation')}>
            <TextInput style={styles.text} placeholder="Kişi" />
          </TouchableOpacity>
        </View>
        <Button style={styles.button} flexWrap="wrap" title="Search" />
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: 'blue',
  },
  icon: {
    fontSize: 40,
    flexBasis: 50,
  },
  container: {
    flexDirection: 'row',
  },
  candidate: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    flexBasis: 100,
  },
});

//<Button
//title="Nereye"
//type="clear"
//onPress={() => navigation.navigate('SearchLocation')}
//>
