export interface FeedObject {
    url: string;
    photographer: string;
    src: { medium: string };
}

export interface Feed {
    feedObjects: Array<FeedObject>;
}

export function DefaultFeed(): Feed {
    return { feedObjects: [] };
}
