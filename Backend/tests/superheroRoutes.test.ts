import request from "supertest";
import express from "express";
import superheroRouter from "../src/routes/superheroRoutes";
import { superheroes } from "../src/controller/superheroController";

const app = express();
app.use(express.json());
app.use("/super-heroes", superheroRouter);

describe("Humble Superhero API", () => {
  beforeEach(() => {
    superheroes.length = 0; // Clear the array before each test
  });

  it("should add a superhero successfully", async () => {
    const newHero = {
      name: "Monkey D Luffy",
      superPower: "Gum Gum no Mi",
      humilityScore: 10,
    };

    const response = await request(app)
      .post("/super-heroes/add-super-hero")
      .send(newHero);

    expect(response.status).toBe(201);
    expect(response.body).toEqual(newHero);
  });

  it("should return 400 if superPower is missing", async () => {
    const response = await request(app)
      .post("/super-heroes/add-super-hero")
      .send({
        name: "Zoro",
        superPower: "", // Missing field
        humilityScore: 8,
      });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message", "All fields are required");
  });

  it("should return 400 if name is missing", async () => {
    const response = await request(app)
      .post("/super-heroes/add-super-hero")
      .send({
        name: "", // Missing name
        superPower: "Hito Hito no mi",
        humilityScore: 8,
      });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message", "All fields are required");
  });

  it("should return 400 if humilityScore is out of range", async () => {
    const response = await request(app)
      .post("/super-heroes/add-super-hero")
      .send({
        name: "Sanji",
        superPower: "Black Leg",
        humilityScore: 15, // Out of range
      });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty(
      "message",
      "Humility score must be a number between 1 and 10"
    );
  });

  it("should return superheroes sorted by humilityScore", async () => {
    // Add multiple heroes
    await request(app).post("/super-heroes/add-super-hero").send({
      name: "Monkey D Luffy",
      superPower: "Gum Gum no Mi",
      humilityScore: 10,
    });

    await request(app).post("/super-heroes/add-super-hero").send({
      name: "Sanji",
      superPower: "Black Leg",
      humilityScore: 5,
    });

    const response = await request(app).get("/super-heroes/get-super-heroes");

    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      {
        name: "Monkey D Luffy",
        superPower: "Gum Gum no Mi",
        humilityScore: 10,
      },
      { name: "Sanji", superPower: "Black Leg", humilityScore: 5 },
    ]); // Sorted by humilityScore descending
  });
});
