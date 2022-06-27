interface INews {
  articles: IArticle[];
  status: string;
}

interface IArticle {
  source: ISource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}

interface ISource {
  id: string;
  name: string;
}

interface ISearchNewsProps {
  query: string;
}

interface IFetchNewsResponse extends IResponse {
  userDetails: IUser;
  isBlacklisted: boolean;
}

interface IThunkErrorResponse {
  error: IResponse | null | undefined;
  status: number;
}
