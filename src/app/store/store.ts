import { create } from "zustand";
import { v4 as uuid } from "uuid";
import { createJSONStorage, persist } from "zustand/middleware";
import { Rutine } from "../interfaces/rutine.interface";

interface State {
  // Rutine
  rutine: Rutine[];
  deletedRutine: Rutine[];
}

const initialState: Rutine[] = [
  {
    id: uuid(),
    day: "Monday",
    bodyParts: ["Chest", "Triceps"],
    exercises: [
      { name: "Bench Press", reps: "10-12 reps", sets: 4 },
      { name: "Incline Dumbbell Press", reps: "10-12 reps", sets: 3 },
      { name: "Tricep Pushdowns", reps: "12-15 reps", sets: 3 },
      { name: "Overhead Tricep Extension", reps: "12-15 reps", sets: 3 },
    ],
  },
  {
    id: uuid(),
    day: "Wednesday",
    bodyParts: ["Back", "Biceps"],
    exercises: [
      { name: "Pull-ups", reps: "8-10 reps", sets: 4 },
      { name: "Barbell Rows", reps: "10-12 reps", sets: 3 },
      { name: "Bicep Curls", reps: "12-15 reps", sets: 3 },
      { name: "Hammer Curls", reps: "12-15 reps", sets: 3 },
    ],
  },
  {
    id: uuid(),
    day: "Friday",
    bodyParts: ["Legs", "Shoulders"],
    exercises: [
      { name: "Squats", reps: "8-10 reps", sets: 4 },
      { name: "Leg Press", reps: "10-12 reps", sets: 3 },
      { name: "Shoulder Press", reps: "10-12 reps", sets: 3 },
      { name: "Lateral Raises", reps: "12-15 reps", sets: 3 },
    ],
  },
];

export const useRutineStore = create<State>()(
  persist(
    (set, get) => ({
      // Rutine
      rutine: initialState,
      deletedRutine: [],
    }),
    {
      name: "rutine-store",
      storage: createJSONStorage(() => sessionStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.rutine = state.rutine.map((rutine) => ({
            ...rutine,
            createdAt: new Date(),
          }));
        }
      },
    }
  )
);