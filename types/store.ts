import { DefaultPictures, Pictures } from './picture';

export interface Store {
    pictures: Pictures;
}

export function DefaultStore(): Store {
    return { pictures: DefaultPictures() };
}
