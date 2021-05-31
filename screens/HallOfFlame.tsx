import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from "react-native";

export default function HallOfFlame() {
  const formattedOutput = (value: string) => {
    return (
      <View style={{ paddingHorizontal: 10 }}>
        <View
          style={{
            paddingHorizontal: 10,
          }}
        >
          <Text style={styles.title}>{value}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hall of Flame</Text>
      <ScrollView style={styles.scrollView}>
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
  scrollView: {},
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
