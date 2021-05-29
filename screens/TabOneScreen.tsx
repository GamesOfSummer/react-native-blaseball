import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useSelector, useDispatch } from "react-redux";
import { callAsyncGetFeed, clearFeed } from '../redux/feedActions';

export default function TabOneScreen() {

  const counter = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(callAsyncGetFeed());
    dispatch(clearFeed());
  }, []);

 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fuck yeah blaseball</Text>
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
