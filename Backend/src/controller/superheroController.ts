import express, { Request, Response } from "express";

interface Superhero {
  name: string;
  superPower: string;
  humilityScore: number;
}

export const superheroes: Superhero[] = [];

export const addSuperhero = (req: Request, res: Response): any => {
  const { name, superPower, humilityScore } = req.body;
  if (!name || !superPower || humilityScore === undefined) {
    return res.status(400).json({ message: "All fields are required" });
  }
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

export const getSuperheroes = (req: Request, res: Response) => {
  const sortedHeroes = superheroes.sort(
    (a: Superhero, b: Superhero) => b.humilityScore - a.humilityScore
  );
  res.json(sortedHeroes);
};
