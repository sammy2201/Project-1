"use client";
// components/SuperheroList.tsx
import React, { useEffect } from "react";
import axios from "axios";

// Defining the structure of a superhero object
interface Superhero {
  name: string;
  superPower: string;
  humilityScore: number;
}

const SuperheroList = ({
  superheroes,
  setSuperheroes,
}: {
  superheroes: Superhero[];
  setSuperheroes: React.Dispatch<React.SetStateAction<Superhero[]>>;
}) => {
  // Fetch superheroes when the component mounts (on page load)
  useEffect(() => {
    const fetchSuperheroes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/super-heroes/get-super-heroes"
        );
        setSuperheroes(response.data);
      } catch (error) {
        console.error("Error fetching superheroes:", error);
      }
    };

    fetchSuperheroes();
  }, [setSuperheroes]);

  return (
    <div className="space-y-4 ">
      {superheroes.map((hero, index) => (
        <div key={index} className="p-4 bg-gray-100 rounded-md shadow">
          <h2 className="text-2xl font-semibold text-center  text-transparent bg-clip-text bg-gradient-to-r from-[#1D3B53] to-[#3B4C77]">
            {hero.name}
          </h2>

          <p className="text-sm text-gray-600 font-serif ">
            Power: {hero.superPower}
          </p>
          <p className="text-sm text-gray-600 font-serif ">
            Humility Score: {hero.humilityScore}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SuperheroList;
