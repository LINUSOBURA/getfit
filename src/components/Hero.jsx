import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center max-w-[900px] w-full mx-auto p-4">
      <p>IT'S TIME TO</p>
      <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
        GET<span className="text-blue-400">FIT</span>
      </h1>

      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl mt-10">
        <i className="fa-solid fa-dumbbell fa-bounce"></i>
      </div>
      <p className="text-sm md:text-base font-light">
        Your journey to a healthier, stronger, and happier you starts here.
      </p>
      <p className="sm:items-center text-center">
        Join thousands of others who have taken control of their fitness journey
        with{" "}
        <span className="text-blue-400 font-medium ">
          personalized workouts
        </span>{" "}
        and <span className="text-blue-400 font-medium">expert guidance.</span>{" "}
      </p>

      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"Get Started"}
      />
    </div>
  );
}
