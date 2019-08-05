export interface Source {
    id?: string;
    name?: string;
}

export interface News {
    status: string;
    totalResults: number;
    articles: Articles[];
}

export interface Articles {
    author: string;
    content: string;
    description: string;
    source: Source;
    publishedAt: Date;
    title: string;
    url: string;
    urlToImage: string;
}


