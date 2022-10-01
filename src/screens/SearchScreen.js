import { Button, Card } from '@rneui/themed';
import React, { useState } from 'react';
import {
  View, StyleSheet, TouchableOpacity, TextInput, ImageBackground, Text,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import ModalSelector from 'react-native-modal-selector';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

import HomeScreenBg from '../images/homeScreenBg.png';
import { arrivalLocationSelector, departureLocationSelector } from '../lib/selectors';

const person = [
  { key: 1, label: 1 },
  { key: 2, label: 2 },
  { key: 3, label: 3 },
  { key: 4, label: 4 },
  { key: 5, label: 5 },
  { key: 6, label: 6 },
  { key: 7, label: 7 },
  { key: 8, label: 8 },
  { key: 9, label: 9 },
  { key: 10, label: 10 },
];

export default function SearchScreen({ navigation }) {
  const departureLocation = useSelector(departureLocationSelector);
  const arrivalLocation = useSelector(arrivalLocationSelector);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);

  return (
    <View>
      <ImageBackground
        source={HomeScreenBg}
        style={styles.imageBackground}
      />
      <Text style={styles.headerText}>Düşük ücretlerle yolculuk seçeneklerin</Text>
      <Card borderRadius={30} marginTop={100}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SearchLocation', { selectionType: 'departure' })}
        >
          <TextInput
            style={styles.text}
            inlineImageLeft="search_icon"
            placeholder="Kalkış Yeri"
            value={departureLocation?.name}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SearchLocation', { selectionType: 'arrival' })}
        >
          <TextInput
            style={styles.text}
            placeholder="Varış Yeri"
            value={arrivalLocation?.name}
          />
        </TouchableOpacity>
        <View style={styles.container}>
          <Ionicons style={styles.icon} name="calendar-outline" />
          <TouchableOpacity style={styles.calendar} onPress={() => setOpen(true)}>
            <Text style={styles.text}>
              {confirm === true
                ? `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`
                : 'Select Date'}
            </Text>
          </TouchableOpacity>
          <DatePicker
            modal
            locale="tr"
            mode="date"
            date={date}
            onDateChange={setDate}
            open={open}
            onConfirm={(value) => {
              setOpen(false);
              setDate(value);
              setConfirm(true);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          <Ionicons style={styles.icon} name="people-outline" />
          <TouchableOpacity style={styles.calendar}>
            <ModalSelector data={person} initValue="Select Person" />
          </TouchableOpacity>
        </View>
        <Button
          style={styles.button}
          flexWrap="wrap"
          title="Search"
          onPress={() => navigation.navigate('MapScreen')}
        />
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
  },
  icon: {
    fontSize: 40,
    flexBasis: 40,
  },
  container: {
    flexDirection: 'row',
  },
  calendar: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    flexBasis: 140,
  },
  headerText: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },
  imageBackground: {
    width: '100%',
    aspectRatio: 2,
    position: 'absolute',
  },
});
