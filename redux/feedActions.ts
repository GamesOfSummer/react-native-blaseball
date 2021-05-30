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
    asyncGetFeed = 'asyncGetFeed',
}


export const clearFeed = () => ({
    type: feedActionsEnum.clearFeed
});

export const setFeed = (feedObject : string) => ({
    type: feedActionsEnum.setFeed,
    feedObject,
});


const getEvent = (function()
{
    let newIndex = 0;
   
    return function(){
        newIndex++;
        const array = ['Play ball!', 
        'Top of 1, Tokyo Lift batting.', 
        'Yusef Fenestrate batting for the Lift.',
    'Yusef Fenestrate hits a Single!', 
    'Gerund Pantheocide batting for the Lift.', 
    'Gerund Pantheocide hit a ground out to Nicholas Mora.'];


        if(newIndex > array.length)
        {
            newIndex = newIndex - array.length - 1;
        }

        return array[newIndex];
    }
});



export function* asyncGetFeed(): any {
    try {
    
let test = getEvent();

while(true)
{
    yield delay(1000);
    yield put({
        type: feedActionsEnum.setFeed,
        value: test(),
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
