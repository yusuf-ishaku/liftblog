export interface BlogPost {
  image: string;
  title: string;
  author: {
    image: string;
    name: string;
  };
  date: string;
  id: string;
}
