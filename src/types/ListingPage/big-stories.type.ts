export interface IFilteredStories {
  id: number;
  image: string;
  title: string;
  institution: string;
  date: string;
  category: string;
}

export interface IBigStoriesProps {
  filteredStories: IFilteredStories[];
}
