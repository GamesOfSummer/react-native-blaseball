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
        const headerParams = {
            Authorization: `563492ad6f9170000100000196cbe16d24264bd39f0ea60e3f1faa0b`,
        };

        const apiCall = () => {
            return axios
                .get(
                    'https://api.pexels.com/v1/search?query=nature&size=medium&orientation=landscape&per_page=8',
                    {
                        headers: headerParams,
                    }
                )
                .then((response: { data: any }) => response.data)
                .catch((err: any) => {
                    throw err;
                });
        };

        const pictures = yield call(apiCall);
        // eslint-disable-next-line no-console
        console.log(
            '🚀 ~ file: pictureActions.ts ~ line 36 ~ function*asyncGetPictures ~ user',
            pictures
        );

        yield put({
            type: feedActionsEnum.setFeed,
            value: pictures.photos,
        });

    } catch (e) {
        throw new Error(e.message);
    }
}

export const callAsyncGetPictures = () => ({
    type: feedActionsEnum.asyncGetFeed,
});

export function* watchAsyncGetPictures() {
    yield takeLatest(feedActionsEnum.asyncGetFeed, asyncGetFeed);
}
