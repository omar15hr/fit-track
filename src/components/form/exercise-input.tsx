import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

interface Exercise {
  name: string;
  reps: number;
  sets: number;
}

interface ExerciseInputProps {
  exercise: Exercise;
  index: number;
  exercises: Exercise[];
  onRemove: (index: number) => void;
  onChange: (index: number, field: keyof Exercise, value: string | number) => void;
}

export function ExerciseInput({
  exercise,
  index,
  exercises,
  onRemove,
  onChange,
}: ExerciseInputProps) {
  return (
    <div className="p-4 border rounded-lg bg-card shadow-sm">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="text-sm font-medium">Ejercicio {index + 1}</h4>
          {exercises.length > 1 && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => onRemove(index)}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Eliminar ejercicio</span>
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-2">
            <Label htmlFor={`exercise-name-${index}`} className="text-sm font-medium">
              Nombre del Ejercicio
            </Label>
            <Input
              id={`exercise-name-${index}`}
              placeholder="Ej: Sentadillas"
              value={exercise.name}
              type="text"
              onChange={(e) => onChange(index, "name", e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label 
                htmlFor={`exercise-reps-${index}`} 
                className="text-sm font-medium block"
              >
                Repeticiones
              </Label>
              <Input
                id={`exercise-reps-${index}`}
                type="number"
                min="1"
                placeholder="12"
                value={exercise.reps}
                onChange={(e) => onChange(index, "reps", parseInt(e.target.value))}
                required
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label 
                htmlFor={`exercise-sets-${index}`} 
                className="text-sm font-medium block"
              >
                Sets
              </Label>
              <Input
                id={`exercise-sets-${index}`}
                type="number"
                min="1"
                placeholder="3"
                value={exercise.sets}
                onChange={(e) => onChange(index, "sets", parseInt(e.target.value))}
                required
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
