import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useSelector, useDispatch } from "react-redux";
import { callAsyncGetFeed, clearFeed } from '../redux/feedActions';

export default function TabTwoScreen() {

  const counter = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(callAsyncGetFeed());
    dispatch(clearFeed());
  }, []);


  return (
    <View style={styles.container}>

      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />


      <button
      className="counter-action decrement"
      onClick={() => dispatch(clearFeed()) }>
    </button>

      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
