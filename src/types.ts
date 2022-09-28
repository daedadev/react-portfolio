export type IconData = {
  src: string;
  alt: string;
}

export interface IProjectProps {
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

export interface IProjectModalProps {
  liveApp: string;
  githubApp: string;
  title: string;
  image: string;
  info: string;
  challenges: string;
  triumphs: string;
  dependancies: string[];
  video: string;
  setToggleModal: (toggle: boolean) => void;
  toggleModal: boolean;
}