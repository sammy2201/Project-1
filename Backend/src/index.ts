import express from "express";
import cors from "cors";
import superheroRouter from "./routes/superheroRoutes";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/super-heroes", superheroRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
