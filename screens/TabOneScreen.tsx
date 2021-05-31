import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { useSelector, useDispatch } from "react-redux";
import { callAsyncGetFeed } from "../redux/feedActions";
import { Store } from "../types/store";

export default function TabOneScreen() {
  const state = useSelector((state) => state) as Store;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(callAsyncGetFeed());
  }, []);

  const lastFeed = () => {
    if (state?.feed?.feedObjects && state.feed.feedObjects.length > 0) {
      const length2 = state.feed.feedObjects.length - 1;
      const valid = () => {
        return (
          state.feed.feedObjects[length2] &&
          state.feed.feedObjects[length2].feed
        );
      };
      return valid()
        ? state.feed.feedObjects[length2].feed.toString()
        : "Play Ball!";
    } else {
      return "Play Ball!";
    }
  };

  const lastFeed2 = () => {
    if (state?.feed?.feedObjects2 && state.feed.feedObjects2.length > 0) {
      const length2 = state.feed.feedObjects2.length - 1;
      const valid = () => {
        return (
          state.feed.feedObjects2[length2] &&
          state.feed.feedObjects2[length2].feed
        );
      };
      return valid()
        ? state.feed.feedObjects2[length2].feed.toString()
        : "Play Ball!";
    } else {
      return "Play Ball!";
    }
  };

  const formattedOutput = () => {
    return (
      <View>
        <View style={{ margin: 10 }}>
          <View
            style={{
              margin: "10px 10px 30px 10px",
            }}
          >
            <Text style={styles.title}>{lastFeed()}</Text>
          </View>
        </View>
      </View>
    );
  };

  const formattedOutput2 = () => {
    return (
      <View>
        <View style={{ margin: "10px 10px 50px 10px" }}>
          <View
            style={{
              margin: "10px 10px 30px 10px",
            }}
          >
            <Text style={styles.title}>{lastFeed2()}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heck yeah, blaseball</Text>
      <Text style={styles.separator}></Text>

      {formattedOutput()}
      {formattedOutput2()}
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
