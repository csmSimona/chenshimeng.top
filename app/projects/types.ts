export type Project = {
  id: number;
  name: string;
  summary: string;
  description: string;
  techs: string[];
  image: string;
  imageAlt: string;
  githubUrl?: string;
  liveUrl?: string;
};

export type CardMotion = {
  x: number;
  y: number;
  z: number;
  scale: number;
  rotateY: number;
  rotateZ: number;
  opacity: number;
};

export type ExitStartMotion = Pick<CardMotion, "x" | "y" | "z" | "scale" | "rotateY" | "rotateZ" | "opacity">;
