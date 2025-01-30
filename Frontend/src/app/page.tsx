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
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">
        Humble Superheroes
      </h1>

      <SuperheroForm onAddSuperhero={addSuperhero} />

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-white">Superheroes List</h2>
        <SuperheroList
          superheroes={superheroes}
          setSuperheroes={setSuperheroes}
        />
      </div>
    </div>
  );
};

export default Home; // Make sure to export the component as default
