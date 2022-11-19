import { Card } from '@rneui/base';
import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ResultCard from '../components/ResultCard';

export default function SearchResultScreen({ navigation }) {
  return (
    <ScrollView>
      <Card borderRadius={30} backgroundColor="blue">
        <View alignItems="center" flexDirection="row">
          <TouchableOpacity onPress={() => navigation.navigate('SearchInsideStack')}>
            <Ionicons style={styles.icon} name="chevron-back-outline" />
          </TouchableOpacity>
          <View flexDirection="column">
            <View flexDirection="row">
              <Text style={styles.item}>Departure</Text>
              <Ionicons style={styles.icon} name="arrow-forward-outline" />
              <Text style={styles.item}>Arrival</Text>
            </View>
            <View flexDirection="row">
              <Text style={styles.subItem}>Date ,</Text>
              <Text style={styles.subItem}>Passenger</Text>
            </View>
          </View>
        </View>
      </Card>
      <Text style={styles.text}>Today's Date</Text>
      <ResultCard />
      <ResultCard />
      <ResultCard />
      <ResultCard />
      <ResultCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    textAlign: 'center',
    alignItems: 'center',
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 5,
    fontSize: 20,
  },
  subItem: {
    textAlign: 'center',
    alignItems: 'center',
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 5,
    fontSize: 17,
  },
  cardItem: {
    borderRadius: 30,
    backgroundColor: 'blue',
  },
  icon: {
    textAlign: 'center',
    alignItems: 'center',
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 5,
    fontSize: 30,
  },
  view: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 30,
    marginLeft: 20,
  },
});

