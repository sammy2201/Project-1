import express, { Request, Response } from "express";

// Define the structure for a superhero object
interface Superhero {
  name: string;
  superPower: string;
  humilityScore: number;
}

// Array to store all superheroes
export const superheroes: Superhero[] = [];

// Function to add a new superhero to the list
export const addSuperhero = (req: Request, res: Response): any => {
  const { name, superPower, humilityScore } = req.body;
  // Check if all required fields are present
  if (!name || !superPower || humilityScore === undefined) {
    return res.status(400).json({ message: "All fields are required" });
  }
  // Check if humilityScore is a number between 1 and 10
  if (
    typeof humilityScore !== "number" ||
    humilityScore < 1 ||
    humilityScore > 10
  ) {
    return res
      .status(400)
      .json({ message: "Humility score must be a number between 1 and 10" });
  }
  const newSuperhero: Superhero = { name, superPower, humilityScore };
  superheroes.push(newSuperhero);
  res.status(201).json(newSuperhero);
};

// Function to get the list of all superheroes
export const getSuperheroes = (req: Request, res: Response) => {
  const sortedHeroes = superheroes.sort(
    (a: Superhero, b: Superhero) => b.humilityScore - a.humilityScore
  );
  res.json(sortedHeroes);
};
