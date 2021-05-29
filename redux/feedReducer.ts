import { DefaultFeed, Feed } from '../types/feed';
import { feedActionsEnum } from './feedActions';

const initialState = DefaultFeed();

const feedReducer = (state: Feed, action: any) => {
    if (state === undefined || action === undefined) {
        return initialState;
    }


    switch (action.type) {
        case feedActionsEnum.setFeed: {
            console.log('setFeed - ' + action.value);
            
            return {...state,
            feedObjects: [...state.feedObjects, {feed: action.value}]};
        }
        case feedActionsEnum.clearFeed: {
            console.log('clearFeed - ');
            
            return {...state, ...['test']};
        }
        default:
            return state;
    }
};

export default feedReducer;
