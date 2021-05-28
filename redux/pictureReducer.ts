import { DefaultPictures, Picture } from '../types/picture';
import { pictureActionsEnum } from './pictureActions';

const initialState = DefaultPictures();

const pictureReducer = (state: Picture, action: any) => {
    if (state === undefined || action === undefined) {
        return initialState;
    }

    switch (action.type) {
        case pictureActionsEnum.setPictures: {
            const pictures = action.value;
            return { ...state, pictures };
        }
        default:
            return state;
    }
};

export default pictureReducer;
