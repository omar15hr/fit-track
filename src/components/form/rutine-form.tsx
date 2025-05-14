"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Plus, Save, X } from "lucide-react";
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
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ExerciseInput } from "./exercise-input";

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
  reps: string;
  sets: string;
}

export default function RutineForm() {
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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      day: "",
      selectedBodyParts: [],
    },
  });

  const [selectedParts, setSelectedParts] = useState<string[]>([]);
  const [exercises, setExercises] = useState<Exercise[]>([
    { name: "", reps: "", sets: "" },
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
    value: string
  ) => {
    const updatedExercises = [...exercises];
    updatedExercises[index][field] = value;
    setExercises(updatedExercises);
  };

  const addExercise = () => {
    setExercises([...exercises, { name: "", reps: "", sets: "" }]);
  };

  const removeExercise = (index: number) => {
    if (exercises.length > 1) {
      const updatedExercises = [...exercises];
      updatedExercises.splice(index, 1);
      setExercises(updatedExercises);
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Formulario enviado:", { ...values, exercises });
    // Aquí iría la lógica para guardar la rutina
    form.reset();
    setSelectedParts([]);
    setExercises([{ name: "", reps: "", sets: "" }]);
  }



  const BodyPartSelector = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <FormLabel>Partes del cuerpo</FormLabel>
        <div className="flex flex-wrap gap-2">
          {bodyParts.map((part) => (
            <Badge
              key={part}
              variant="outline"
              className={cn(
                "cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors",
                selectedParts.includes(part) &&
                  "bg-primary text-primary-foreground"
              )}
              onClick={() => handleSelectBodyPart(part)}
            >
              {part}
            </Badge>
          ))}
        </div>
      </div>

      {selectedParts.length > 0 && (
        <div className="space-y-2">
          <FormLabel>Partes seleccionadas</FormLabel>
          <div className="flex flex-wrap gap-2">
            {selectedParts.map((part) => (
              <Badge
                key={part}
                variant="default"
                className="flex items-center gap-1"
              >
                {part}
                <X
                  className="h-3 w-3 cursor-pointer hover:text-destructive"
                  onClick={() => handleRemoveBodyPart(part)}
                />
              </Badge>
            ))}
          </div>
          {form.formState.errors.selectedBodyParts && (
            <p className="text-sm font-medium text-destructive">
              {form.formState.errors.selectedBodyParts.message}
            </p>
          )}
        </div>
      )}
    </div>
  );

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

          <BodyPartSelector />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Ejercicios</h3>
              <span className="text-sm text-muted-foreground">{exercises.length} ejercicio(s)</span>
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
          </div>

          <div>
            <Button type="submit" className="w-full mt-4 cursor-pointer">
              <Save className="h-4 w-4 mr-2" /> Guardar Rutina
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
