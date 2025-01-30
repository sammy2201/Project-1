import express from "express";
import {
  addSuperhero,
  getSuperheroes,
} from "../controller/superheroController"; // Named imports

const router = express.Router();

router.post("/add-super-hero", addSuperhero);
router.get("/get-super-heroes", getSuperheroes);

export default router;
