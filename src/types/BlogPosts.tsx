export interface BlogCardProps {
  title: string;
  index: string;
  description: string;
  imageUrl: string;
  link?: string;
}

export interface BlogSection {
  title: string;
  content: string;
}

export interface BlogContent {
  sections: BlogSection[];
}

export interface BlogPostContent extends BlogCardProps {
  content: BlogContent;
  publishDate: string;
  author: string;
  readTime: string;
}
