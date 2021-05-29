import { DefaultFeed, Feed } from '../types/feed';
import { feedActionsEnum } from './feedActions';

const initialState = DefaultFeed();

const feedReducer = (state: Feed, action: any) => {
    if (state === undefined || action === undefined) {
        return initialState;
    }

    switch (action.type) {
        case feedActionsEnum.setFeed: {
            const pictures = action.value;
            return { ...state, pictures };
        }
        default:
            return state;
    }
};

export default feedReducer;
