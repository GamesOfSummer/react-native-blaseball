import { DefaultFeed, Feed } from '../types/feed';
import { feedActionsEnum } from './feedActions';

const initialState = DefaultFeed();

const feedReducer = (state: Feed, action: any) => {
    if (state === undefined || action === undefined) {
        return initialState;
    }


    switch (action.type) {
        case feedActionsEnum.setFeed: {
            return {...state,
            feedObjects: [...state.feedObjects, {feed: action.value}]};
        }
        case feedActionsEnum.clearFeed: {            
            return {...state, ...['test']};
        }
        default:
            return state;
    }
};

export default feedReducer;
