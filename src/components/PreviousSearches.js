/* eslint-disable no-plusplus */
import React from 'react';
import {
  FlatList, StyleSheet, SafeAreaView, Text, View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

import { previousSearchesSelector } from '../lib/selectors';

export default function PreviousSearches() {
  const added = useSelector(previousSearchesSelector);

  const preSearchArr = added.map((item, index) => ({
    depreture: `${added[index]?.depreture.name ?? ' '}`,
    arrival: `${added[index]?.arrival.name ?? ' '}`,
    date: `Date: ${added[index]?.date.getDate()}.${added[index]?.date.getMonth() + 1}.${added[index]?.date.getFullYear()}`,
    id: added[index].id,
  }));

  const data = preSearchArr.slice(0, 5);

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={{
            flexDirection: 'row',
          }}
          >
            <Text style={styles.item}>{item.depreture}</Text>
            <Ionicons style={styles.icon} name="swap-horizontal-outline" />
            <Text style={styles.item}>{item.arrival}</Text>
          </View>
              <Text style={styles.item}>{item.date}</Text>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    textAlign: 'center',
    alignItems: 'center',
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 5,
    fontSize: 20,
    flex: 0.5,
  },
  icon: {
    textAlign: 'center',
    alignItems: 'center',
    padding: 5,
    marginVertical: 5,
    fontSize: 25,
    flex: 0.2,
  },
});
