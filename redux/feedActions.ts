/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { Pictures } from '../types/picture';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export enum feedActionsEnum {
    setFeed = 'setFeed',
    asyncGetFeed = 'asyncGetFeed',
}

export const setPictures = (pictures: Pictures) => ({
    type: feedActionsEnum.setFeed,
    pictures,
});

export function* asyncGetFeed(): any {
    try {
    
while(true)
{
    console.log('yess');
    yield delay(1000);
        
    yield put({
        type: feedActionsEnum.setFeed,
        value: new Date().getTime,
    });
}
        
console.log('yesss');

    } catch (e) {
        throw new Error(e.message);
    }
}

export const callAsyncGetFeed = () => ({
    type: feedActionsEnum.asyncGetFeed,
});

export function* watchAsyncGetFeed() {
    console.log('yes');
    yield takeLatest(feedActionsEnum.asyncGetFeed, asyncGetFeed);
}
