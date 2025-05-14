export interface Rutine {
  id: string;
  day: string;
  bodyParts: string[];
  exercises: {
    name: string;
    reps: number;
    sets: number;
  }[];
}