"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Plus, Save } from "lucide-react";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ExerciseInput } from "./exercise-input";
import { BodyPartSelector } from "./bodypart-selector";
import { useRutineStore } from "@/app/store/store";
import { v4 as uuid } from "uuid";

const formSchema = z.object({
  day: z.string().min(1, {
    message: "Escribe el día de la rutina. Debe tener al menos 1 caracter.",
  }),
  selectedBodyParts: z.array(z.string()).min(1, {
    message: "Selecciona al menos una parte del cuerpo.",
  }),
});

interface Exercise {
  name: string;
  reps: number;
  sets: number;
}

interface RutineFormProps {
  onClose: () => void;
}

const bodyParts = [
  "Pecho",
  "Espalda",
  "Hombros",
  "Bíceps",
  "Tríceps",
  "Cuádriceps",
  "Isquiotibiales",
  "Glúteos",
  "Pantorrillas",
  "Abdominales",
  "Lumbares",
  "Antebrazos",
  "Trapecio",
];

export default function RutineForm({ onClose }: RutineFormProps) {
  const addRutine = useRutineStore((state) => state.addRutine);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      day: "",
      selectedBodyParts: [],
    },
  });

  const [selectedParts, setSelectedParts] = useState<string[]>([]);
  const [exercises, setExercises] = useState<Exercise[]>([
    { name: "", reps: 1, sets: 1 },
  ]);

  const handleSelectBodyPart = (part: string) => {
    if (!selectedParts.includes(part)) {
      const updatedParts = [...selectedParts, part];
      setSelectedParts(updatedParts);
      form.setValue("selectedBodyParts", updatedParts);
    }
  };

  const handleRemoveBodyPart = (part: string) => {
    const updated = selectedParts.filter((p) => p !== part);
    setSelectedParts(updated);
    form.setValue("selectedBodyParts", updated);
  };

  const handleInputChange = (
    index: number,
    field: keyof Exercise,
    value: number | string
  ) => {
    const updatedExercises = [...exercises];
    if (field === 'name') {
      updatedExercises[index][field] = value as string;
    } else {
      updatedExercises[index][field] = value as number;
    }
    setExercises(updatedExercises);
  };

  const addExercise = () => {
    setExercises([...exercises, { name: "", reps: 1, sets: 1 }]);
  };

  const removeExercise = (index: number) => {
    if (exercises.length > 1) {
      const updatedExercises = [...exercises];
      updatedExercises.splice(index, 1);
      setExercises(updatedExercises);
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    addRutine({
      id: uuid(),
      day: values.day,
      bodyParts: values.selectedBodyParts,
      exercises,
    });
    form.reset();
    setSelectedParts([]);
    setExercises([{ name: "", reps: 1, sets: 1 }]);
    onClose();
  }

  return (
    <div className="max-h-[85vh] overflow-y-auto p-1">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="day"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Día de la rutina</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej: Lunes" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <BodyPartSelector
              bodyParts={bodyParts}
              selectedParts={selectedParts}
              onSelect={handleSelectBodyPart}
              onRemove={handleRemoveBodyPart}
              errorMessage={form.formState.errors.selectedBodyParts?.message}
            />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Ejercicios</h3>
                <span className="text-sm text-muted-foreground">
                  {exercises.length} ejercicio(s)
                </span>
              </div>

              <div className="max-h-[400px] overflow-y-auto pr-2 space-y-4">
                {exercises.map((exercise, index) => (
                  <ExerciseInput
                    key={index}
                    exercise={exercise}
                    index={index}
                    exercises={exercises}
                    onRemove={removeExercise}
                    onChange={handleInputChange}
                  />
                ))}
              </div>

              <Button
                type="button"
                variant="outline"
                onClick={addExercise}
                className="w-full cursor-pointer"
              >
                <Plus className="h-4 w-4 mr-2" /> Añadir Otro Ejercicio
              </Button>
            </div>

            <Button type="submit" className="w-full cursor-pointer">
              <Save className="h-4 w-4 mr-2" /> Guardar Rutina
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

