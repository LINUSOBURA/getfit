import React from "react";
import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/getfit";
import Button from "./Button";

function Header(props) {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-lg sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p>{description}</p>
    </div>
  );
}
export default function Generator(props) {
  const [showModal, setShowModal] = useState(false);
  const {
    goal,
    setGoal,
    muscles,
    setMuscles,
    workoutType,
    setWorkoutType,
    updateWorkout,
  } = props;

  function toggleModal() {
    setShowModal(!showModal);
  }

  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((val) => val !== muscleGroup));
      return;
    }
    if (muscles.length > 2) {
      return;
    }
    if (workoutType !== "individual") {
      setMuscles([muscleGroup]);
      setShowModal(false);
      return;
    }

    setMuscles([...muscles, muscleGroup]);
    if (muscles.length === 2) {
      setShowModal(false);
    }
  }
  return (
    <SectionWrapper
      id="generate"
      header={"Generate your workout"}
      title={["It's", "Fit", "o'clock"]}
    >
      {/*Workout Pick*/}
      <Header
        index={"01"}
        title={"Pick your Workout"}
        description={"Select the workout you wish to endure"}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeindex) => {
          return (
            <button
              onClick={() => {
                setMuscles([]);
                setWorkoutType(type);
              }}
              className={`bg-slate-950 py-2 border border-blue-400 rounded-lg duration-200 hover:border-blue-600 ${
                type === workoutType
                  ? "border-blue-600 border-dashed"
                  : "border-blue-400"
              }`}
              key={typeindex}
            >
              <p className="capitalize text-sm">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      {/*Target Pick*/}
      <Header
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscle you wish to train"}
      />
      <div className="bg-slate-950 p-3 border border-blue-400 rounded-lg flex flex-col">
        <button
          className="relative flex items-center justify-center"
          onClick={toggleModal}
        >
          <p className="capitalize">
            {muscles.length == 0 ? "Select muscle group" : muscles.join(" ")}
          </p>
          <i className="fa-solid fa-sort-down absolute right-3 top-1/2  -translate-y-1/2"></i>
        </button>
        {showModal && (
          <div className="flex flex-col px-3 pb-3">
            {(workoutType === "individual"
              ? WORKOUTS[workoutType]
              : Object.keys(WORKOUTS[workoutType])
            ).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button
                  onClick={() => updateMuscles(muscleGroup)}
                  key={muscleGroupIndex}
                  className={`hover:text-blue-400 duration-200 ${
                    muscles.includes(muscleGroup) ? "text-blue-400" : ""
                  }`}
                >
                  <p className="capitalize">
                    {muscleGroup.replaceAll("_", " ")}
                  </p>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/*Goals Pick*/}
      <Header
        index={"03"}
        title={"Whats your goal?"}
        description={"Select the goals you wish to achieve"}
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeindex) => {
          return (
            <button
              onClick={() => {
                setGoal(scheme);
              }}
              className={`bg-slate-950 py-2 border border-blue-400 rounded-lg duration-200 hover:border-blue-600 ${
                scheme === goal
                  ? "border-blue-600 border-dashed "
                  : "border-blue-400"
              }`}
              key={schemeindex}
            >
              <p className="capitalize text-sm">
                {scheme.replaceAll("_", " & ")}
              </p>
            </button>
          );
        })}
      </div>
      <div className="flex justify-center mb-10">
        <Button text={"Generate"} func={updateWorkout} />
      </div>
    </SectionWrapper>
  );
}
