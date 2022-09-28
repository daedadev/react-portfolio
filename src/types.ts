export type IconData = {
  src: string;
  alt: string;
}

export interface IProjectData {
  liveApp: string;
  githubApp: string;
  title: string;
  image: string;
  classy: string;
  info: string;
  challenges: string;
  triumphs: string;
  dependancies: string[];
  icons: IconData[];
  video: string;
}