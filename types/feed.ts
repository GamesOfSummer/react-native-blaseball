export interface FeedObject {
    feed: string;
}

export interface Feed {
    feedObjects: Array<FeedObject>;
    feedObjects2: Array<FeedObject>;
    feedObjects3: Array<FeedObject>;
}

export function DefaultFeed(): Feed {
    return { feedObjects: [], feedObjects2: [], feedObjects3: [] };
}
