export interface IRelatedNewsItemProps {
  imageUrl: string;
  title: string;
  source: string;
  date: string;
}

export interface INewsSidebarProps {
  bannerImageUrl: string;
  relatedNews: IRelatedNewsItemProps[];
}
