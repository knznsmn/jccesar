export type NavigationItem = {
  name: string;
  link: string;
  meta: string;
  view: string;
};

export type PortfolioItem = {
  title: string;
  description: string;
  link: string;
  preview: string;
  sections?: {
    challenge: {
      text: string;
      image?: string;
      align: "left" | "right" | "center";
    };
    strategy: {
      text: string;
      image?: string;
      align: "left" | "right" | "center";
    };
    execution: {
      text: string;
      image?: string;
      align: "left" | "right" | "center";
    };
    result: {
      text: string;
      image?: string;
      align: "left" | "right" | "center";
    };
  };
  metadata: {
    title: string;
    description: string;
    ogImage: string;
  };
};

export type Skill = {
  title: string;
  description: string;
  link: string;
};

export type AuthorInfo = {
  name: string;
  role: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  address: string;
};

export type WebsiteMetadata = {
  titleTemplate: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultOgImage: string;
  twitterCard: string;
};

export type Website = {
  name: string;
  tagline: string;
  description: string;
  link: string;
  metadata: WebsiteMetadata;
  author: AuthorInfo;
};

export type Contents = {
  website: Website;
  navigation: NavigationItem[];
  portfolio: PortfolioItem[];
  skills: Skill[];
};
