import { create } from "zustand";
import { v4 as uuid } from "uuid";
import { createJSONStorage, persist } from "zustand/middleware";
import { Rutine } from "../interfaces/rutine.interface";

interface State {
  // Rutine
  rutine: Rutine[];
  addRutine: (rutine: Rutine) => void;
}

const initialState: Rutine[] = [
  {
    id: uuid(),
    day: "Monday",
    bodyParts: ["Chest", "Triceps"],
    exercises: [
      { name: "Bench Press", reps: 10, sets: 4 },
      { name: "Incline Dumbbell Press", reps: 12, sets: 3 },
      { name: "Tricep Pushdowns", reps: 12, sets: 3 },
      { name: "Overhead Tricep Extension", reps: 12, sets: 3 },
    ],
  },
  {
    id: uuid(),
    day: "Wednesday",
    bodyParts: ["Back", "Biceps"],
    exercises: [
      { name: "Pull-ups", reps: 8, sets: 4 },
      { name: "Barbell Rows", reps: 12, sets: 3 },
      { name: "Bicep Curls", reps: 12, sets: 3 },
      { name: "Hammer Curls", reps: 12, sets: 3 },
    ],
  },
  {
    id: uuid(),
    day: "Friday",
    bodyParts: ["Legs", "Shoulders"],
    exercises: [
      { name: "Squats", reps: 8, sets: 4 },
      { name: "Leg Press", reps: 12, sets: 3 },
      { name: "Shoulder Press", reps: 12, sets: 3 },
      { name: "Lateral Raises", reps: 12, sets: 3 },
    ],
  },
];

export const useRutineStore = create<State>()(
  persist(
    (set, get) => ({
      // Rutine
      rutine: initialState,
      addRutine: (rutine: Rutine) => {
        set((state) => ({
          rutine: [...state.rutine, rutine],
        }));
      },
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