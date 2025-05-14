
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type Exercise = {
  id: number;
  name: string;
  description: string;
  image: string;
  muscles: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
};

const exercises: Exercise[] = [
  {
    id: 1,
    name: 'Push-ups',
    description: 'A classic bodyweight exercise that targets the chest, shoulders, and triceps. Start in a plank position with hands shoulder-width apart and lower your body until your chest nearly touches the floor, then push back up.',
    image: '/exercises/pushup.jpg',
    muscles: ['Chest', 'Shoulders', 'Triceps'],
    difficulty: 'beginner',
  },
  {
    id: 2,
    name: 'Squats',
    description: 'A fundamental lower body exercise. Stand with feet shoulder-width apart, bend your knees and hips to lower your body as if sitting in a chair, then return to standing position.',
    image: '/exercises/squat.jpg',
    muscles: ['Quadriceps', 'Hamstrings', 'Glutes'],
    difficulty: 'beginner',
  },
  {
    id: 3,
    name: 'Deadlifts',
    description: 'A compound exercise that works multiple muscle groups. With feet hip-width apart, bend at the hips and knees to grip a barbell, then stand up straight while keeping your back flat.',
    image: '/exercises/deadlift.jpg',
    muscles: ['Lower Back', 'Hamstrings', 'Glutes', 'Core'],
    difficulty: 'intermediate',
  },
  {
    id: 4,
    name: 'Pull-ups',
    description: 'An upper body exercise that builds back and arm strength. Hang from a bar with palms facing away from you, then pull your body up until your chin is above the bar.',
    image: '/exercises/pullup.jpg',
    muscles: ['Back', 'Biceps', 'Shoulders'],
    difficulty: 'intermediate',
  },
  {
    id: 5,
    name: 'Plank',
    description: 'A core-strengthening isometric exercise. Hold a position similar to a push-up, but with your weight on your forearms, keeping your body in a straight line from head to heels.',
    image: '/exercises/plank.jpg',
    muscles: ['Core', 'Shoulders', 'Back'],
    difficulty: 'beginner',
  },
  {
    id: 6,
    name: 'Lunges',
    description: 'A unilateral exercise that works the legs and improves balance. Step forward with one leg, lowering your hips until both knees are bent at about 90 degrees, then push back to the starting position.',
    image: '/exercises/lunge.jpg',
    muscles: ['Quadriceps', 'Hamstrings', 'Glutes', 'Calves'],
    difficulty: 'beginner',
  },
];

function ExerciseCard({ exercise }: { exercise: Exercise }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48 w-full bg-gray-200">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          <span>Exercise Image</span>
        </div>
        {/* Uncomment when images are available */}
        {/* <Image 
          src={exercise.image} 
          alt={exercise.name} 
          fill 
          className="object-cover" 
        /> */}
      </div>
      <CardContent className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-xl font-bold">{exercise.name}</h3>
          <Badge variant={exercise.difficulty === 'beginner' ? 'default' : exercise.difficulty === 'intermediate' ? 'secondary' : 'destructive'}>
            {exercise.difficulty}
          </Badge>
        </div>
        <p className="mb-4 text-sm text-gray-600">{exercise.description}</p>
        <div className="flex flex-wrap gap-1">
          {exercise.muscles.map((muscle) => (
            <Badge key={muscle} variant="outline">{muscle}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function Catalog() {
  return (
    <div className="container mx-auto p-5">
      <h1 className="mb-8 text-3xl font-bold">Exercise Catalog</h1>
      <p className="mb-6 text-gray-600">Browse our collection of exercises to build your perfect workout routine.</p>
      
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </div>
  );
}
