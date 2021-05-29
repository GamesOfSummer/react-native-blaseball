import { DefaultPictures, Pictures } from './picture';
import { DefaultFeed, Feed } from './feed';

export interface Store {
    pictures: Pictures;
    feed: Feed;
}

export function DefaultStore(): Store {
    return { feed: DefaultFeed(), pictures: DefaultPictures() };
}
