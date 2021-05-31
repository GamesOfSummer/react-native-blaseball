import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { random } from "lodash";

export default function TabTwoScreen() {
  const formattedOutput = (text: string) => {
    return (
      <View>
        <View style={{ width: "80%", margin: 10 }}>
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
    <View style={styles.container}>
      <Text style={styles.title}>Snacks</Text>
      <View style={styles.separator} />
      {formattedOutput("Peanuts")}
      {formattedOutput("Snake Oil")}
      {formattedOutput("Pickles")}
    </View>
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
    color: "white",
  },
  amountOwnedText: {
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
