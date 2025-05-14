"use client";

import { Badge } from "@/components/ui/badge";
import { FormLabel } from "@/components/ui/form";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface BodyPartSelectorProps {
  bodyParts: string[];
  selectedParts: string[];
  onSelect: (part: string) => void;
  onRemove: (part: string) => void;
  errorMessage?: string;
}

export const BodyPartSelector: React.FC<BodyPartSelectorProps> = ({
  bodyParts,
  selectedParts,
  onSelect,
  onRemove,
  errorMessage,
}) => {
  return (
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
              onClick={() => onSelect(part)}
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
                  onClick={() => onRemove(part)}
                />
              </Badge>
            ))}
          </div>
          {errorMessage && (
            <p className="text-sm font-medium text-destructive">
              {errorMessage}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
