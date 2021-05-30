import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { head } from 'lodash';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useSelector, useDispatch } from "react-redux";
import { callAsyncGetFeed, clearFeed } from '../redux/feedActions';
import { Store } from '../types/store';
import { FeedObject } from '../types/feed';

export default function TabOneScreen() {

  const feedState = useSelector(state => state) as Store;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(callAsyncGetFeed());
  }, []);


  const lastFeed = () => {
    if(feedState?.feed?.feedObjects)
    {
      return head(feedState.feed.feedObjects)?.feed;
    }
    else
    {
      return 'Booting up';
    }
  }
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fuck yeah blaseball</Text>
      <Text style={styles.title}>{lastFeed()}</Text>
      <Text style={styles.title}>{feedState.feed.feedObjects.length}</Text>
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
