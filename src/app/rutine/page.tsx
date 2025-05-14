"use client";
import { ExerciseCard } from "@/components/exercise-card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRutineStore } from "@/app/store/store";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RutineForm } from "@/components/rutine-form";

export default function Rutine() {
  const rutine = useRutineStore((state) => state.rutine);

  const handleEdit = () => {
    console.log("Edit workout");
  };

  const handleDelete = () => {
    console.log("Delete workout");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Tu Rutina de Entrenamiento</h1>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mb-4 cursor-pointer">
            <Plus className="h-4 w-4" />
            Crear Rutina
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Crear Rutina</DialogTitle>
            <DialogDescription>
              Completa el formulario para crear una nueva rutina de entrenamiento
            </DialogDescription>
          </DialogHeader>
          <RutineForm />
        </DialogContent>
      </Dialog>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rutine.map((workout, index) => (
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
