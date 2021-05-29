import { all } from 'redux-saga/effects';
import { watchAsyncGetFeed } from './feedActions';
import { watchAsyncGetPictures } from './pictureActions';

export default function* rootSaga() {
    yield all([watchAsyncGetPictures(), watchAsyncGetFeed()]);
}
