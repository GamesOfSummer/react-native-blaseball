import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { tail } from 'lodash';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useSelector, useDispatch } from "react-redux";
import { callAsyncGetFeed, clearFeed } from '../redux/feedActions';
import { Store } from '../types/store';
import { FeedObject } from '../types/feed';

export default function TabOneScreen() {

  const state = useSelector(state => state) as Store;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(callAsyncGetFeed());
  }, []);


  const lastFeed = () => {
    if(state?.feed?.feedObjects && state.feed.feedObjects.length > 0)
    {
      const length2 = state.feed.feedObjects.length - 1;
      return state.feed.feedObjects[length2] ? state.feed.feedObjects[length2].feed.toString() : 'Starting...';
    }
    else
    {
      return 'Booting up';
    }
  }
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heck yeah, blaseball</Text>
      <Text style={styles.title}>{lastFeed()}</Text>
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
