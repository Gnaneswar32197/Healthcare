import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import patientRoutes from "./routes/patientRoutes";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Healthcare API Running"
  });
});

app.use(
  "/api/healthcare/patients",
  patientRoutes
);

export default app;