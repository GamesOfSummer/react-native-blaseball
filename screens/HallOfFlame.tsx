import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";

export default function HallOfFlame() {
  const formattedOutput = (value: string) => {
    return (
      <View>
        <View style={{ paddingHorizontal: 10 }}>
          <View
            style={{
              paddingHorizontal: 10,
            }}
          >
            <Text style={styles.title}>{value}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Hall of Flame</Text>
        <Text style={styles.separator}></Text>

        {formattedOutput("August Mina")}
        {formattedOutput("Chorby Soul")}
        {formattedOutput("Sebastian Telephone")}
        {formattedOutput("August Mina")}
        {formattedOutput("Chorby Soul")}
        {formattedOutput("Sebastian Telephone")}
        {formattedOutput("August Mina")}
        {formattedOutput("Chorby Soul")}
        {formattedOutput("Sebastian Telephone")}
        {formattedOutput("August Mina")}
        {formattedOutput("Chorby Soul")}
        {formattedOutput("Sebastian Telephone")}
      </ScrollView>
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
  scrollView: { width: "500px" },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#3d3d3d",
    color: "white",
  },
  separator: {
    height: 1,
    width: "80%",
  },
});
