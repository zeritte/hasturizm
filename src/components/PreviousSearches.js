/* eslint-disable no-plusplus */
import React from 'react';
import {
  FlatList, StyleSheet, SafeAreaView, Text,
} from 'react-native';
import { useSelector } from 'react-redux';

import { previousSearchesSelector } from '../lib/selectors';

export default function PreviousSearches() {
  const added = useSelector(previousSearchesSelector);

  const preSearchArr = added.map((item, index) => ({
    title: `${added[index]?.depreture.name ?? ' '}        ${added[index]?.arrival.name ?? ' '}`,
    id: 1,
  }));

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
