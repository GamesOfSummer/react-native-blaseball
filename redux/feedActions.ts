/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { Pictures } from '../types/picture';
import { FeedObject } from '../types/feed';
import { random } from 'lodash';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export enum feedActionsEnum {
    clearFeed = 'clearFeed',
    setFeed = 'setFeed',
    setFeed2 = 'setFeed2',
    asyncGetFeed = 'asyncGetFeed',
}


export const clearFeed = () => ({
    type: feedActionsEnum.clearFeed
});

export const setFeed = (feedObject : string) => ({
    type: feedActionsEnum.setFeed,
    feedObject,
});

export const setFeed2 = (feedObject : string) => ({
    type: feedActionsEnum.setFeed2,
    feedObject,
});

const getEvent = (function()
{
    const array = [ 
    'Top of 1, Tokyo Lift batting.', 
    'Yusef Fenestrate batting for the Lift.',
'Yusef Fenestrate hits a Single!', 
'Gerund Pantheocide batting for the Lift.', 
'Gerund Pantheocide hit a ground out to Nicholas Mora.'];
    let newIndex = random(0, array.length - 1);
  
      return array[newIndex];
    
});


export function* asyncGetFeed(): any {
    try {
    

while(true)
{
    yield delay(3000);
    yield put({
        type: feedActionsEnum.setFeed,
        value: getEvent(),
    });

    yield put({
        type: feedActionsEnum.setFeed2,
        value: getEvent(),
    });
   
}
    } catch (e) {
        throw new Error(e.message);
    }
}

export const callAsyncGetFeed = () => ({
    type: feedActionsEnum.asyncGetFeed,
});

export function* watchAsyncGetFeed() {
    yield takeEvery(feedActionsEnum.asyncGetFeed, asyncGetFeed);
}
