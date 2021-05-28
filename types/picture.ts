export interface Picture {
    url: string;
    photographer: string;
    src: { medium: string };
}

export interface Pictures {
    pictures: Array<Picture>;
}

export function DefaultPictures(): Pictures {
    return { pictures: [] };
}
