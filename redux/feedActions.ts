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


const getEvent = (index: number) =>
{
    let newIndex = index;
    const eventsArray = (newIndex : number) =>
    {
        const array = ['Play ball!', 
        'Top of 1, Tokyo Lift batting.', 
        'Yusef Fenestrate batting for the Lift.',
    'Yusef Fenestrate hits a Single!', 
    'Gerund Pantheocide batting for the Lift.', 
    'Gerund Pantheocide hit a ground out to Nicholas Mora.'];


        if(newIndex > array.length)
        {
            newIndex = newIndex - array.length;
        }

        return [array][newIndex];
    }

    return eventsArray(newIndex);
}



export function* asyncGetFeed(): any {
    try {
    
while(true)
{
    yield put({
        type: feedActionsEnum.setFeed,
        value: getEvent(0),
    });
    yield delay(5000);
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
