import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useSelector, useDispatch } from "react-redux";
import { callAsyncGetFeed, clearFeed } from '../redux/feedActions';
import { random } from 'lodash';

export default function TabTwoScreen() {

  const counter = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(callAsyncGetFeed());
    dispatch(clearFeed());
  }, []);


  const formattedOutput = (text : string) =>
  {
return(
  <div style={{width: '80%', padding: '10px 10px 50px 10px'}}>
<div style={{border: '1px solid #3d3d3d', padding: '10px 10px 30px 10px'}}>
<Text style={styles.title}>{text}</Text>
<Text style={styles.amountOwnedText}>You own {random(1, 99)}</Text>
</div>
</div>
)
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Snacks</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />


      <button
      className="counter-action decrement"
      onClick={() => dispatch(clearFeed()) }> Clear Cache
    </button>

      {formattedOutput('Peanuts')}
      {formattedOutput('Snake Oil')}
      {formattedOutput('Pickles')}
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
  amountOwnedText: {
    fontSize: 10,
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
