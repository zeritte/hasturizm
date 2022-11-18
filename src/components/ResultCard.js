import { Card } from '@rneui/base';
import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function ResultCard() {
  return (
    <>
      <Card borderRadius={30}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://i.pravatar.cc/300',
          }}
        />
        <Text style={styles.text}>name</Text>
        {/* <View style={styles.view}>
          <Ionicons style={styles.icon} name="time-outline" />
          <Text numberOfLines={1} style={styles.item}>fsd</Text>
          <Ionicons style={styles.icon} name="arrow-forward-outline" />
          <Text numberOfLines={1} style={styles.item}>sf</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.item}>sffdsf</Text>
          <Text style={styles.item}>dfsf</Text>
        </View> */}
      </Card>
    </>
  );
}

export default ResultCard;

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
