"use client"; // Marking the file as client component

import { useState } from "react";
import SuperheroForm from "../components/SuperheroForm";
import SuperheroList from "../components/SuperheroList";

const Home = () => {
  const [superheroes, setSuperheroes] = useState<any[]>([]);

  // Function to add a new superhero
  const addSuperhero = (newSuperhero: any) => {
    setSuperheroes((prevHeroes) => {
      return [newSuperhero, ...prevHeroes].sort(
        (a, b) => b.humilityScore - a.humilityScore
      );
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6 text-white mt-10 font-mono">
        Humble Superheroes
      </h1>
      <div className="bg-white rounded shadow-lg p-6 px-6  mt-20 max-w-5xl mx-auto ">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
          <div className="text-gray-600">
            <SuperheroForm onAddSuperhero={addSuperhero} />
          </div>

          <div className="lg:col-span-1 h-96 overflow-y-auto mt-10 ml-3">
            <SuperheroList
              superheroes={superheroes}
              setSuperheroes={setSuperheroes}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; // Make sure to export the component as default
