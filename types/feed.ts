export interface FeedObject {
    feed: string;
}

export interface Feed {
    feedObjects: Array<FeedObject>;
}

export function DefaultFeed(): Feed {
    return { feedObjects: [] };
}
