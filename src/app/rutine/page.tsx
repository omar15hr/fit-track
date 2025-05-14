"use client";
import { ExerciseCard } from "@/components/exercise-card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Rutine() {
  // Sample data for demonstration
  const sampleWorkouts = [
    {
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

  const handleEdit = () => {
    console.log("Edit workout");
    // Implement edit functionality
  };

  const handleDelete = () => {
    console.log("Delete workout");
    // Implement delete functionality
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Tu Rutina de Entrenamiento</h1>
      <Button className="mb-4">
        <Plus className="h-4 w-4" />
        Crear Rutina
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleWorkouts.map((workout, index) => (
          <ExerciseCard
            key={index}
            day={workout.day}
            bodyParts={workout.bodyParts}
            exercises={workout.exercises}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
