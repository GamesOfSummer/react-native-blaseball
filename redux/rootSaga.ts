import { all } from 'redux-saga/effects';
import { watchAsyncGetPictures } from './pictureActions';

export default function* rootSaga() {
    yield all([watchAsyncGetPictures()]);
}
