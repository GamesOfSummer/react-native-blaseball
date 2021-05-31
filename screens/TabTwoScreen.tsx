import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from "react-native";
import { random } from "lodash";

export default function TabTwoScreen() {
  const formattedOutput = (text: string) => {
    return (
      <View>
        <View style={{ paddingHorizontal: 20, margin: 10 }}>
          <View
            style={{
              margin: 10,
            }}
          >
            <Text style={styles.title}>{text}</Text>
            <Text style={styles.amountOwnedText}>You own {random(1, 99)}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.separator} />
        {formattedOutput("Peanuts")}
        {formattedOutput("Snake Oil")}
        {formattedOutput("Pickles")}
        {formattedOutput("Breakfast")}
        {formattedOutput("Snake Oil")}
        {formattedOutput("Pickles")}
        {formattedOutput("Peanuts")}
        {formattedOutput("Snake Oil")}
        {formattedOutput("Pickles")}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#3d3d3d",
    margin: 10,
    paddingHorizontal: 20,
    color: "white",
  },
  amountOwnedText: {
    textAlign: "center",
    fontSize: 10,
    fontWeight: "bold",
    backgroundColor: "#3d3d3d",
    margin: 10,
    color: "white",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
