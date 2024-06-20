import { useState, useEffect } from "react";
import Generator from "./components/Generator";
import Hero from "./components/Hero";
import Workout from "./components/Workout";
import { generateWorkout } from "./utils/functions";

function App() {
  const [workout, setWorkout] = useState(null);
  const [goal, setGoal] = useState("strength_power");
  const [muscles, setMuscles] = useState([]);
  const [workoutType, setWorkoutType] = useState("individual");

  function updateWorkout() {
    if (muscles.length < 1) {
      return;
    }
    let newWorkout = generateWorkout({ workoutType, muscles, goal });
    console.log(newWorkout);
    setWorkout(newWorkout);
  }

  useEffect(() => {
    if (workout !== null) {
      window.location.href = "#workout";
    }
  }, [workout]);

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <Hero />
      <Generator
        workoutType={workoutType}
        setWorkoutType={setWorkoutType}
        goal={goal}
        setGoal={setGoal}
        muscles={muscles}
        setMuscles={setMuscles}
        updateWorkout={updateWorkout}
      />
      {workout && <Workout workout={workout} />}
    </main>
  );
}

export default App;
