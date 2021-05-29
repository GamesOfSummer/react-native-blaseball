/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { Pictures } from '../types/picture';
import { FeedObject } from '../types/feed';

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


export function* asyncGetFeed(): any {
    try {
    
while(true)
{
    yield put({
        type: feedActionsEnum.setFeed,
        value: 'Test',
    });
    yield delay(1000);

    yield put(setFeed('???'));
    yield delay(1000);
  
    yield put({
        type: feedActionsEnum.clearFeed
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
