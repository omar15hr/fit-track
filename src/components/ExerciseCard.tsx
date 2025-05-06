export function ExerciseCard() {
  return (
    <div className="w-72">
      <div className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 text-white p-3 rounded-t-2xl">
        <h1 className="text-md font-bold">Upper Body Workout</h1>
        <span className="text-gray-200 text-xs">Monday</span>
      </div>
      <div className="flex flex-col gap-2 bg-white p-3">
        <div className="flex flex-col gap-1">
          <h2>Bench Press</h2>
          <span className="text-xs text-gray-500 border-b-1 border-gray-200 pb-2">
            3 sets x 12 reps
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <h2>Pull-ups</h2>
          <span className="text-xs text-gray-500 border-b-1 border-gray-200 pb-2">
            3 sets x 10 reps
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <h2>Shoulder Press</h2>
          <span className="text-xs text-gray-500 border-b-1 border-gray-200 pb-2">
            3 sets x 15 reps
          </span>
        </div>
      </div>
      <div className="flex  gap-2 bg-white px-2 pb-3 rounded-b-2xl shadow-xl">
        <button className="flex gap-1 bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-full px-4 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-pencil"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
            <path d="M13.5 6.5l4 4" />
          </svg>
          <span className="text-sm">Edit</span>
        </button>
        <button className="flex gap-1 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full px-4 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-trash"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 7l16 0" />
            <path d="M10 11l0 6" />
            <path d="M14 11l0 6" />
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          </svg>
          <span className="text-sm">Delete</span>
        </button>
      </div>
    </div>
  );
}
