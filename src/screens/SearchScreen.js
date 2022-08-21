/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import { Button, Card } from "@rneui/themed";
import React from "react";
import { View, StyleSheet, TouchableOpacity, TextInput, ImageBackground, Text } from "react-native";
import ModalSelector from "react-native-modal-selector";
import Ionicons from "react-native-vector-icons/Ionicons";
Ionicons.loadFont();

export default function ({ navigation, props }) {
  let index = 0;
  const person = [
    { key: index++, label: 1 },
    { key: index++, label: 2 },
    { key: index++, label: 3 },
    { key: index++, label: 4 },
    { key: index++, label: 5 },
    { key: index++, label: 6 },
    { key: index++, label: 7 },
    { key: index++, label: 8 },
    { key: index++, label: 9 },
    { key: index++, label: 10 },
  ];

  return (
    <View>
      <ImageBackground
        source={require("../images/homeScreenBg.png")}
        style={{ width: "100%", aspectRatio: 2, position: "absolute" }}
      />
      <Text style={styles.headerText}>Düşük ücretlerle yolculuk seçeneklerin</Text>
      <Card borderRadius={30} marginTop={100}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SearchLocation")}
        >
          <TextInput
            style={styles.text}
            inlineImageLeft="search_icon"
            placeholder="Kalkış Yeri"
            onPressIn={() => navigation.navigate("SearchLocation")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SearchLocation")}
        >
          <TextInput
            style={styles.text}
            placeholder="Varış Yeri"
            onPressIn={() => navigation.navigate("SearchLocation")}
          />
        </TouchableOpacity>
        <View style={styles.container}>
          <Ionicons style={styles.icon} name="calendar-outline" />
          <TouchableOpacity
            style={styles.calendar}
            onPress={() => navigation.navigate("SearchLocation")}
          >
            <TextInput style={styles.text} placeholder="Tarih" />
          </TouchableOpacity>
          <Ionicons style={styles.icon} name="people-outline" />
          
          <TouchableOpacity style={styles.calendar}>
            <ModalSelector data={person} initValue="Select Person"></ModalSelector>
          </TouchableOpacity>
        </View>
        <Button style={styles.button} flexWrap="wrap" title="Search" />
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 10
  },
  text: {
    fontSize: 20,
    color: "blue"
  },
  icon: {
    fontSize: 40,
    flexBasis: 50
  },
  container: {
    flexDirection: "row"
  },
  calendar: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    flexBasis: 100
  },
  headerText: {
    fontSize: 25,
    color: "white",
    textAlign: "center"
  }
});
