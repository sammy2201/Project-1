"use client";
import React, { useState } from "react";
import axios from "axios";

// This component is for adding a new superhero.
const SuperheroForm = ({ onAddSuperhero }: { onAddSuperhero: Function }) => {
  const [name, setName] = useState("");
  const [superPower, setSuperPower] = useState("");
  const [humilityScore, setHumilityScore] = useState(1);
  const [error, setError] = useState("");

  // Handle the form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if any field is empty or humility score is not between 1-10
    if (!name || !superPower || humilityScore < 1 || humilityScore > 10) {
      setError("Please fill all fields correctly.");
      return;
    }

    // Function to check if the name and superpower contain only letters
    const isAlphabhet = (str: string) => /^[A-Za-z.\s]+$/.test(str);

    if (!isAlphabhet(name)) {
      setError("Superhero name should only contain letters.");
      return;
    }

    if (!isAlphabhet(superPower)) {
      setError("Superpower should only contain letters.");
      return;
    }

    try {
      // Send a request to the server to add the new superhero
      const response = await axios.post(
        "http://localhost:3000/super-heroes/add-super-hero",
        {
          name,
          superPower,
          humilityScore,
        }
      );

      onAddSuperhero(response.data); // Pass the newly added superhero to the parent
      setName("");
      setSuperPower("");
      setHumilityScore(1);
      setError("");
    } catch (err) {
      setError("Failed to add superhero. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <div className="text-red-500">{error}</div>}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700">
            Superhero Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="superPower"
            className="block text-sm font-medium text-gray-700 ">
            Superpower
          </label>
          <input
            id="superPower"
            type="text"
            value={superPower}
            onChange={(e) => setSuperPower(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="humilityScore"
            className="block text-sm font-medium text-gray-700">
            Humility Score (1-10)
          </label>
          <input
            id="humilityScore"
            type="number"
            value={humilityScore}
            onChange={(e) => setHumilityScore(Number(e.target.value))}
            min={1}
            max={10}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white py-2 px-4 rounded-md hover:from-blue-400 hover:to-teal-500 transition-all duration-300 ease-in-out">
          Add Superhero
        </button>
      </form>
    </div>
  );
};

export default SuperheroForm;
