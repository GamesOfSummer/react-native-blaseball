import { combineReducers } from 'redux';
import pictureReducer from './pictureReducer';
import feedReducer from './feedReducer';

const rootReducer = combineReducers({
    pictures: pictureReducer,
    feed: feedReducer, 
});

export default rootReducer;
