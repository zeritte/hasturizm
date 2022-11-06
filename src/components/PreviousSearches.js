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
    departure: `${item?.departure?.name ?? ' '}`,
    arrival: `${item?.arrival?.name ?? ' '}`,
    passenger: `Passenger: ${item?.passengerCount ?? ' '}`,
    date: `Date: ${item?.date?.getDate()}.${item?.date?.getMonth() + 1}.${item?.date?.getFullYear()}`,
    id: item.id,
  })).slice(0, 5), [previousSearches]);

  return (
    <>
      {data.map((item) => (
        <Card borderRadius={30} key={item.id}>
          <View style={styles.view}>
            <Ionicons style={styles.icon} name="time-outline" />
            <Text style={styles.item}>{item.departure}</Text>
            <Ionicons style={styles.icon} name="arrow-forward-outline" />
            <Text style={styles.item}>{item.arrival}</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.item}>{item.date}</Text>
            <Text style={styles.item}>{item.passenger}</Text>
          </View>
        </Card>
      ))}
    </>
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
  view: {
    flexDirection: 'row',
  },
});
