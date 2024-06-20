import React, { useEffect } from "react";
import { useState } from "react";

export default function ExcerciseCard(props) {
  const { exercise, index } = props;
  const [setsCompleted, setSetsCompleted] = useState(0);
  function handleSetsCompleted() {
    setSetsCompleted((setsCompleted + 1) % 6);
  }

  useEffect(() => {
    setSetsCompleted(0);
  }, [exercise]);

  return (
    <div className="p-4 rounded-md flex flex-col gap-4 bg-slate-950 flex-wrap">
      <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4">
        <h4 className="text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-slate-400">
          0{index + 1}
        </h4>
        <h2 className="capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 md:text-center">
          {exercise.name.replaceAll("_", " ")}
        </h2>
        <p className="text-sm text-slate-400 capitalize">{exercise.type}</p>
      </div>

      <div className="flex flex-col">
        <h3 className="text-slate-400 text-sm">Muscle Group</h3>
        <p className="capitalize">{exercise.muscles.join(" & ")}</p>
      </div>

      <div className="flex flex-col bg-slate-950 rounded gap-2">
        {exercise.description.split("__").map((val, idx) => {
          return (
            <div className="text-sm" key={idx}>
              {val}
            </div>
          );
        })}
      </div>

      <div className="grid drid-cols-2 sm:grid-cols-4 sm:place-items-center gap-2">
        {["reps", "rest", "tempo"].map((info) => {
          return (
            <div
              key={info}
              className="flex flex-col p-2 rounded border-[1.5px] border-solid border-slate-900 w-full"
            >
              <h3 className="capitalize text-slate-400 text-sm">
                {info === "reps" ? `${exercise.unit}` : info}
              </h3>
              <p className="font-medium">{exercise[info]}</p>
            </div>
          );
        })}

        <button
          onClick={handleSetsCompleted}
          className="flex flex-col p-2 rounded border-[1.5px] duration-200 border-solid border-blue-900 hover:border-blue-600 w-full"
        >
          <h3 className="text-slate-400 text-sm capitalize">Sets Completed</h3>
          <p>{setsCompleted}/5</p>
        </button>
      </div>
    </div>
  );
}
