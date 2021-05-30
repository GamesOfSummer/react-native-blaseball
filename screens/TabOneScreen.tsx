import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { tail } from 'lodash';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useSelector, useDispatch } from "react-redux";
import { callAsyncGetFeed, clearFeed } from '../redux/feedActions';
import { Store } from '../types/store';
import { FeedObject } from '../types/feed';
import { color } from 'react-native-reanimated';

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
      const valid = () => {return (state.feed.feedObjects[length2] && state.feed.feedObjects[length2].feed);}
      return valid() ? state.feed.feedObjects[length2].feed.toString() : 'Starting...';
    }
    else
    {
      return 'Booting up';
    }
  }

  const formattedOutput = () =>
  {
return(
  <div style={{padding: '10px 10px 50px 10px'}}>
<div style={{border: '1px solid #3d3d3d', padding: '10px 10px 30px 10px'}}>
<Text style={styles.title}>{lastFeed()}</Text>
</div>
</div>
)
  }
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heck yeah, blaseball</Text>
      <Text style={styles.separator}></Text>
     
 
        {formattedOutput()}
        {formattedOutput()}
        {formattedOutput()}
        {formattedOutput()}
        {formattedOutput()}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#3d3d3d',
    padding: '10px 10px 10px 10px',
    color: 'white'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
