import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/auth.routes";
import adminRoutes from "./routes/adminRoutes";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth",authRoutes);

app.use("/api/admin",adminRoutes);

export default app;