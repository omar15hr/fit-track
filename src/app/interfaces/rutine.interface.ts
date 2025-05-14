export interface Rutine {
  id: string;
  day: string;
  bodyParts: string[];
  exercises: {
    name: string;
    reps: string;
    sets: number;
  }[];
}