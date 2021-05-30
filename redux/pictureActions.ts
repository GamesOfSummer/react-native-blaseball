/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { Pictures } from '../types/picture';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export enum pictureActionsEnum {
    setPictures = 'setPictures',
    asyncGetPictures = 'asyncGetPictures',
}

export const setPictures = (pictures: Pictures) => ({
    type: pictureActionsEnum.setPictures,
    pictures,
});

export function* asyncGetPictures(): any {
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
        

        yield put({
            type: pictureActionsEnum.setPictures,
            value: pictures.photos,
        });
    } catch (e) {
        throw new Error(e.message);
    }
}

export const callAsyncGetPictures = () => ({
    type: pictureActionsEnum.asyncGetPictures,
});

export function* watchAsyncGetPictures() {
    yield takeLatest(pictureActionsEnum.asyncGetPictures, asyncGetPictures);
}
