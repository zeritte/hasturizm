import { Card } from '@rneui/base';
import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function ResultCard() {
  return (
    <>
      <Card borderRadius={30} backgroundColor="blue">
        <View alignItems="center" flexDirection="row">
          <View flexDirection="column">
            <View flexDirection="row">
              <View>
                <Text style={styles.item}>09.00</Text>
              </View>
              <View>
                <Text style={styles.item}>İstanbul</Text>
              </View>
            </View>
            <View flexDirection="row">
              <View>
                <Text style={styles.item}>15.30</Text>
              </View>
              <View>
                <Text style={styles.item}>Paris</Text>
              </View>
            </View>
            <View flexDirection="row">
        <Image
                style={{ width: 50, height: 50, borderRadius: 50 }}
                source={{ uri: 'https://i.pravatar.cc/300' }}
        />
              <Text style={styles.item}>BlaBlaCar</Text>
              <Ionicons style={styles.icon} name="battery-charging-outline" />
        </View>
          </View>
          <View>
            <Text style={styles.price}>50 $</Text>
          </View>
        </View>
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
