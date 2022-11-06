/* eslint-disable max-len */
/* eslint-disable no-plusplus */
import { Card } from '@rneui/base';
import React, { useMemo } from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

import { previousSearchesSelector } from '../lib/selectors';

function PreviousSearches() {
  const previousSearches = useSelector(previousSearchesSelector);

  const data = useMemo(() => previousSearches.map((item) => ({
  })).slice(0, 5), [previousSearches]);

  return (
    <SafeAreaView style={{ marginBottom: 1000 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Card borderRadius={30}>
            <View style={{
              flexDirection: 'row',
            }}
            >
              <Ionicons style={styles.icon} name="time-outline" />
            <Text style={styles.item}>{item.departure}</Text>
              <Ionicons style={styles.icon} name="arrow-forward-outline" />
              <Text style={styles.item}>{item.arrival}</Text>
            </View>
            <View style={{
              flexDirection: 'row',
            }}
            >
              <Text style={styles.item}>{item.date}</Text>
              <Text style={styles.item}>{item.person}</Text>
            </View>
          </Card>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const MemoizedPreviousSearches = React.memo(PreviousSearches);
export default MemoizedPreviousSearches;

const styles = StyleSheet.create({
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
    marginHorizontal: 5,
    fontSize: 25,
    flex: 0.2,
  },
});
