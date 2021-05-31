import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { RootStackParamList } from "../types";

export default function NotFoundScreen({
  navigation,
}: StackScreenProps<RootStackParamList, "NotFound">) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require("../assets/images/Binky.png")}
      />
      <Text style={styles.title}>uh where am i</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#fff",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
});
