import { combineReducers } from 'redux';
import pictureReducer from './pictureReducer';

const rootReducer = combineReducers({
    pictures: pictureReducer,
});

export default rootReducer;
