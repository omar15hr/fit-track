import { ExerciseCard } from "./components/ExerciseCard";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="p-5">
        <ExerciseCard />
      </div>
    </>
  );
}

export default App;
