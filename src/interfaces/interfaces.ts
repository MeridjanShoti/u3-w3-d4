export interface DataInterface {
  count: number;
  next: string | null;
  previous: string | null;
  results: Result[];
}

export interface Result {
  id: number;
  title: string;
  authors: Author[];
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: Date;
  updated_at: Date;
  featured: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  launches: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  events: any[];
}

export interface Author {
  name: string;
  socials: Socials | null;
}

export interface Socials {
  x: string;
  youtube: string;
  instagram: string;
  linkedin: string;
  mastodon: string;
  bluesky: string;
}
