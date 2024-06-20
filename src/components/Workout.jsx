import React from "react";
import SectionWrapper from "./SectionWrapper";
import ExerciseCard from "./ExerciseCard";

export default function Workout(props) {
  const { workout } = props;
  return (
    <SectionWrapper
      id="workout"
      header={"Here's your workout"}
      title={[
        "Time to",
        "Burn & Build",
        <i className="fa-solid fa-dumbbell"></i>,
      ]}
    >
      <div className="flex flex-col gap-4">
        {workout.map((exercise, index) => {
          return <ExerciseCard index={index} exercise={exercise} key={index} />;
        })}
      </div>
    </SectionWrapper>
  );
}
