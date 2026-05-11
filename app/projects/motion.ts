import type { CardMotion, ExitStartMotion } from "./types";

export const cardSpring = {
  type: "spring" as const,
  stiffness: 150,
  damping: 24,
  mass: 1.05,
};

export const getStackMotion = (stackIndex: number): CardMotion => {
  const offset = Math.min(stackIndex, 3);
  const direction = offset % 2 === 0 ? -1 : 1;

  return {
    x: direction * offset * 96,
    y: offset * 20 - 6,
    z: -offset * 140,
    scale: 1 - offset * 0.035,
    rotateY: direction * offset * 7,
    rotateZ: direction * offset * 3.4,
    opacity: stackIndex === 0 ? 1 : stackIndex < 4 ? 0.55 : 0,
  };
};

export const getSwipeReleaseMotion = (direction: 1 | -1, distance = 128): ExitStartMotion => ({
  x: direction * distance,
  y: 18,
  z: -130,
  scale: 0.96,
  rotateY: direction * -10,
  rotateZ: direction * 3,
  opacity: 1,
});
