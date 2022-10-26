/* eslint-disable no-plusplus */
import React from 'react';
import {
  FlatList, StyleSheet, SafeAreaView, View, Text,
} from 'react-native';
import { useSelector } from 'react-redux';

import { previousSearchesSelector } from '../lib/selectors';

export default function PreviousSearches() {
  const added = useSelector(previousSearchesSelector);

  const preSearchArr = [
    {
      title: `${added[0]?.depreture.name}   =>   ${added[0]?.arrival.name}`,
      id: 1,
    },
    {
      title: `${added[1]?.depreture.name}   =>   ${added[1]?.arrival.name}`,
      id: 2,
    },
    {
      title: `${added[2]?.depreture.name}   =>   ${added[2]?.arrival.name}`,
      id: 3,
    },
    {
      title: `${added[3]?.depreture.name}   =>   ${added[3]?.arrival.name}`,
      id: 4,
    },
    {
      title: `${added[4]?.depreture.name}   =>   ${added[4]?.arrival.name}`,
      id: 5,
    },
  ];

  const data = preSearchArr.slice(0, 5);
  console.log(data);

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
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
    backgroundColor: 'white',
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 20,
  },
});
